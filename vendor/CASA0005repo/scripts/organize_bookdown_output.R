output_dir <- "docs"

chapter_pages <- c(
  "software-installation.html" = "00-course-introduction",
  "external-usage.html" = "00-course-introduction",
  "the-basics-of-geographic-information-data.html" = "00-course-introduction",
  "01-geographic-information.html" = "01-geographic-information",
  "02-introduction-to-r.html" = "02-introduction-to-r",
  "03-spatial-descriptive-statistics.html" = "03-spatial-descriptive-statistics",
  "04-git-github-and-rmarkdown.html" = "04-git-github-and-rmarkdown",
  "05-map-making.html" = "05-map-making",
  "06-detecting-spatial-patterns.html" = "06-detecting-spatial-patterns",
  "07-spatial-autocorrelation.html" = "07-spatial-autocorrelation",
  "08-explaining-spatial-patterns.html" = "08-explaining-spatial-patterns",
  "09-qgis-joining-data.html" = "09-qgis-joining-data",
  "multiple-linear-regression.html" = "12-multiple-linear-regression",
  "module-resources.html" = "13-assignment-resources",
  "extra-reproducibility.html" = "14-extra",
  "qgis-maps.html" = "15-qgis-maps",
  "tmap-version-3.html" = "16-tmap-version-3",
  "functions-1.html" = "17-functions",
  "interactive-maps.html" = "18-interactive-maps",
  "past-questions.html" = "20-past-questions",
  "field-trip.html" = "21-fieldtrip"
)

search_page_aliases <- c(
  "geographic-information.html" = "01-geographic-information/01-geographic-information.html",
  "introduction-to-r.html" = "02-introduction-to-r/02-introduction-to-r.html",
  "spatial-descriptive-statistics.html" = "03-spatial-descriptive-statistics/03-spatial-descriptive-statistics.html",
  "git-github-and-rmarkdown.html" = "04-git-github-and-rmarkdown/04-git-github-and-rmarkdown.html",
  "map-making.html" = "05-map-making/05-map-making.html",
  "detecting-spatial-patterns.html" = "06-detecting-spatial-patterns/06-detecting-spatial-patterns.html",
  "spatial-autocorrelation.html" = "07-spatial-autocorrelation/07-spatial-autocorrelation.html",
  "explaining-spatial-patterns.html" = "08-explaining-spatial-patterns/08-explaining-spatial-patterns.html",
  "qgis-joining-data.html" = "09-qgis-joining-data/09-qgis-joining-data.html"
)

for (page in names(chapter_pages)) {
  source <- file.path(output_dir, page)
  destination_dir <- file.path(output_dir, chapter_pages[[page]])
  destination <- file.path(destination_dir, page)

  if (!file.exists(source) && !file.exists(destination)) {
    stop("Expected Bookdown page was not generated: ", source)
  }
  if (file.exists(source)) {
    dir.create(destination_dir, recursive = TRUE, showWarnings = FALSE)
    if (file.exists(destination)) unlink(destination)
    if (!file.rename(source, destination)) stop("Could not move Bookdown page: ", source)
  }
}

relative_page_path <- function(from_dir, to_dir, filename) {
  if (identical(from_dir, to_dir)) return(filename)
  if (identical(from_dir, ".")) return(file.path(to_dir, filename))
  if (identical(to_dir, ".")) return(file.path("..", filename))
  file.path("..", to_dir, filename)
}

html_files <- list.files(output_dir, pattern = "\\.html$", recursive = TRUE, full.names = TRUE)
attribute_pattern <- "(?:href|src|data-path)=(?:\"[^\"]*\"|'[^']*')"

for (html_file in html_files) {
  bytes <- readBin(html_file, what = "raw", n = file.info(html_file)$size)
  content <- rawToChar(bytes)
  Encoding(content) <- "UTF-8"
  from_dir <- if (dirname(html_file) == output_dir) "." else basename(dirname(html_file))

  matches <- gregexpr(attribute_pattern, content, perl = TRUE)[[1]]
  if (matches[1] != -1) {
    attributes <- regmatches(content, list(matches))[[1]]
    for (attribute in attributes) {
      separator <- regexpr("=", attribute, fixed = TRUE)[1]
      key <- substr(attribute, 1, separator - 1)
      quoted_value <- substr(attribute, separator + 1, nchar(attribute))
      quote <- substr(quoted_value, 1, 1)
      value <- substr(quoted_value, 2, nchar(quoted_value) - 1)

      if (grepl("^(#|/|[A-Za-z][A-Za-z0-9+.-]*:)", value)) next
      raw_path <- sub("[?#].*$", "", value)
      suffix <- substring(value, nchar(raw_path) + 1)
      path <- sub("^\\./", "", raw_path)
      replacement <- value

      if (path %in% names(chapter_pages)) {
        replacement <- paste0(
          relative_page_path(from_dir, chapter_pages[[path]], path), suffix
        )
      } else if (from_dir != "." && nzchar(path) && !startsWith(path, "../")) {
        replacement <- paste0("../", sub("^\\./", "", value))
      }

      if (!identical(value, replacement)) {
        old <- paste0(key, "=", quote, value, quote)
        new <- paste0(key, "=", quote, replacement, quote)
        content <- sub(old, new, content, fixed = TRUE)
      }
    }
  }

  writeBin(charToRaw(content), html_file)
}

search_index <- file.path(output_dir, "search_index.json")
if (file.exists(search_index)) {
  bytes <- readBin(search_index, what = "raw", n = file.info(search_index)$size)
  content <- rawToChar(bytes)
  for (page in names(chapter_pages)) {
    replacement <- file.path(chapter_pages[[page]], page)
    content <- sub(paste0('["', page, '",'), paste0('["', replacement, '",'), content, fixed = TRUE)
  }
  for (page in names(search_page_aliases)) {
    content <- sub(paste0('["', page, '",'), paste0('["', search_page_aliases[[page]], '",'), content, fixed = TRUE)
  }
  writeBin(charToRaw(content), search_index)
}

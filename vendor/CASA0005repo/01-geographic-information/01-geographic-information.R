suppressPackageStartupMessages(library(sf))

paid_employee_data <- read.csv(here::here(
  "01-geographic-information",
  "assignment-data",
  "paid-employee",
  "assignment-paid-employee-by-territorial-authority-2018.csv"
))

territorial_authority_boundaries <- st_read(here::here(
  "01-geographic-information",
  "assignment-data",
  "territorial-authority-boundaries",
  "assignment-territorial-authority-2018-generalised.shp"
), quiet = TRUE)

test <- data.frame(
  name = c("zane", "luna"),
  age = c(27, 27)
)

cat("Paid employee data — first 5 rows\n")
print(head(paid_employee_data, 5))

cat("\nTerritorial authority boundary attributes — first 5 rows\n")
print(sf::st_drop_geometry(head(territorial_authority_boundaries, 5)))

library(sf)

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
))

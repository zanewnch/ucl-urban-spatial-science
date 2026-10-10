# Chapter 1 teaching data

These files provide the public data used by the Chapter 1 R Markdown examples.

- `source-data/fly-tipping-borough.csv` is the Greater London Authority machine-readable [Fly-tipping Incidents dataset](https://data.london.gov.uk/dataset/fly-tipping-incidents-e5myg), downloaded 2026-10-10. It is provided under the Open Government Licence v2.
- `fly_tipping_borough_edit.csv` is the lesson-ready table derived from that source: rows use the borough GSS code as `Row Labels`; `total_incidents` is pivoted into year columns for 2011-12 through 2017-18; the year separators are underscores to match the R column name used by the lesson; `Grand Total` sums those seven years. Source cells marked `:` are left blank and read as missing values.
- `statistical-gis-boundaries-london/ESRI/London_Borough_Excluding_MHW.*` contains the London borough boundary shapefile and its sidecar files, from the Greater London Authority [Statistical GIS Boundary Files for London](https://data.london.gov.uk/dataset/statistical-gis-boundary-files-for-london-20od9), using the 2011 borough boundaries.

For maps made with the boundary data, include the source credit required by the dataset: “Contains National Statistics data © Crown copyright and database right [2015]. Contains Ordnance Survey data © Crown copyright and database right [2015].”
Course link: [Chapter 1: Geographic Information](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html)

# CASA0005 Geographic Information Systems and Science

> This directory is a trimmed content snapshot of the [upstream CASA0005 repository](https://github.com/andrewmaclachlan/CASA0005repo) at commit `c855a108e6969e7d2a490b6aa176f63b83fbf087`, stored inside its parent repository rather than as a Git submodule. The published `docs/` handbook is retained. Source ignore-matched illustration files and local build caches are omitted, so use the upstream repository for a complete source checkout or to regenerate the book.

<img src="general_images/casa_logo.jpg" width="100" >

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa] [![status](https://jose.theoj.org/papers/a05734775775d1ef968e582ce9a7cb17/status.svg)](https://jose.theoj.org/papers/a05734775775d1ef968e582ce9a7cb17)

## Description

CASA0005 is an MSc level module created and delivered by [Andrew MacLachlan](https://twitter.com/andymaclachlan) and [Adam Dennett](https://twitter.com/adam_dennett) from the [Centre for Advanced Spatial Analysis (CASA)](https://www.ucl.ac.uk/bartlett/casa/), University College London (UCL).  

The module is a combination of lectures and practicals, with this repository holding the code to generate the student practical handbook, which can be found at: https://andrewmaclachlan.github.io/CASA0005repo

The content covers the principles underlying the conception, representation/measurement and analysis of spatial phenomena. As such, it presents an overview of the core organising concepts and techniques of Geographic Information Systems, and the software and analysis systems that are integral to their effective deployment in spatial analysis. It is concerned with unearthing and understanding the importance of spatial data in a range of applied contexts.

### JOSE paper

The content discussed within the JOSE paper specifically refers to the module created for the academic year 2020-2021: https://andrewmaclachlan.github.io/CASA0005repo_20202021/. At the conclusion of each year content is copied to a new repository ending with the academic year it was taught, whilst the content applicable to the current academic year remains on the primary repository: https://github.com/andrewmaclachlan/CASA0005repo. This allows the authors and external users to track the development of the content. 

## Target audience

The practical material has primarily been developed for MSc (or MRes) level students who have little or no background in GIS, spatial analysis or the R data science language, but have studied in a related field such as: geography, architecture, computer science, statistics, mathematics or planning.

However, there is no requirement to have any background in these disciplines to go through the material and anyone with an interest in spatial analysis in the R data science programming language will be able to successfully complete the practicals. 

If you have any questions, reach out to us on Twitter:

* [Andy MacLachlan](https://twitter.com/andymaclachlan)
* [Adam Dennett](https://twitter.com/adam_dennett)

## Installation 

### Students

It is recommended that students follow the [software installation guide](https://andrewmaclachlan.github.io/CASA0005repo/software-installation.html) within the practical book and work through the material in their own RStudio instance. If they wish to replicate the practical book, see the next section.

### Instructors 

If instructors wish to replicate the practical book follow the guidance in [External usage](https://andrewmaclachlan.github.io/CASA0005repo/external-usage.html#external-usage) 

## License

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg

## Contributions

We welcome contributions to the content, [see the how to contribute section](https://andrewmaclachlan.github.io/CASA0005repo/external-usage.html#how-to-contribute) in the practical book.

## Previous versions

The content of the course changes most years and previous version can be found at the links below.

Course for the academic year 2021 - 2022: https://andrewmaclachlan.github.io/CASA0005repo_20212022/

Course for the academic year 2020 - 2021: https://andrewmaclachlan.github.io/CASA0005repo_20202021/

Course for the academic year 2019 - 2020: https://andrewmaclachlan.github.io/CASA0005repo_20192020/

## Annual updates

Provided below are brief descriptions of the main annual updates to the practical material.

### 2023 - 2024:

Very few updates to the content this year so no new repo was made. Main updates were to exam questions (not public) and new illustrations by Allison Horst were added.

RGDAl is retiring this year, i think most of the content should be fine - https://geocompx.org/post/2023/rgdal-retirement/ 

### 2022 - 2023:

Better alignment with other CASA modules:
 * moved OLS to supplementary material 
 * moved some reproducible material to supplementary (e.g. renv)

### 2021 - 2022:

Removed:
  * more non geographic content such as dashboards
  * practical 8 on online mapping + more descriptive stats
  * elements of GitHub practical 
  * instructions on citing papers in RMarkdown - this is now on the dissertation template. 
  * interpolation from the first raster practical 

Added 
* more info on spatial weights and deciding between Spatial Error Models (SEMs) and Spatially Lagged Models (SLMs)
* more info on creating GWR bandwidths. 
* weekly homework tasks.

Changed
* mark scheme,  for an open book exam not written assignment.
* Github classroom for submission of the exam.

### 2020 - 2021:

* all of ArcGIS content removed and replaced with R and QGIS (open source)
* set clear weekly homework tasks 
* custom styling of the bookdown website
* revision of nearly all code, moving towards the `tidyverse` and piped (`%>%`) syntax
* more focus on `dplyr` and other data wrangling/tidying tools (e.g. `Janitor`)

### 2019 - 2020:

* all material moved to bookdown
* majority of practicals moved to R
* addition of raster practicals
* revised assignment markscheme and assignment requirements 

## Chapter 1 快速複習：Geographic Information

以下是繁體中文複習摘要，依據 [Chapter 1: Geographic Information](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html) 整理。

1. **GIS 資料長什麼樣**：空間資料有位置或邊界，表格資料則放屬性數值。本章以倫敦行政區界線和 CSV 為例。([Chapter 1](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html))
2. **資料怎麼整理**：先檢查欄位、空白列與格式，把寬表整理成方便分析的形式；檔名和欄位名稱也要避免空格或特殊字元。([Chapter 1](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html))
3. **怎麼把表格接到地圖**：用共同的行政區代碼 join 空間圖層和 CSV。代碼通常比地名可靠，因為名稱可能有拼法差異；接好後要檢查配對是否合理。([Chapter 1](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html))
4. **怎麼看與畫空間資料**：在 QGIS 或 R 載入圖層，查看欄位、幾何與座標參考系統，再畫一張基本地圖；不要只看程式有沒有跑完，也要確認地圖位置和資料內容看起來合理。([Chapter 1](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html))
5. **怎麼保存成果**：用 R project 管理檔案，以相對路徑讀取資料；將整理後的空間圖層存成 GeoPackage，讓地圖資料和屬性可以一起保存。([Chapter 1](https://andrewmaclachlan.github.io/CASA0005repo/geographic-information.html))

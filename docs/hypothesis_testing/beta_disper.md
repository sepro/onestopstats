---
sidebar_position: 3
---

# Beta Dispersion Test

The beta dispersion test is a statistical hypothesis test used to assess whether the variance within different groups in a dataset is equal or not. It is commonly used in ecology to test whether the dispersion of species composition among sites is the same. The test is based on the beta distribution, which is a probability distribution used for modeling proportions and rates.

The beta dispersion test can be used in combination with non-euclidean distances such as [Bray-Curtis](../distance/bray_curtis.md) dissimilarities.

## Uses Cases

Suppose we have collected data on the abundance of three different species (A, B, and C) at five different sites (1, 2, 3, 4 and 5). Our data may look like this:

| Site | Species A | Species B | Species C |
|:-----|:---------:|:---------:|:---------:|
| 1    | 10        | 20        | 30        |
| 2    |   7       |   9       |   4       |
| 3    |   8       |   6       |   9       |
| 4    | 12        | 19        | -         |
| 5    | -         | -         | -         |

We want to test whether there are significant differences in the dispersion of these species across the five sites. We can use the beta disper test to do this.


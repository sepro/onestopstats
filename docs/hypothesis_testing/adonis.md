---
sidebar_position: 3
---

# Adonis

The adonis test (also known as PERMANOVA) is a multivariate hypothesis test used to analyze the differences between two or more groups of samples based on a distance matrix. This test is commonly used in ecology to examine the effects of different factors (such as environmental variables or experimental treatments) on community composition and diversity.


## Use Cases

Suppose we are interested in studying the effects of two different environmental factors (light and temperature) on the composition and diversity of bacterial communities in soil. We can use the adonis test to analyze whether there are significant differences between these groups of samples based on their bacterial community composition. First, we would calculate a distance matrix based on the [Bray-Curtis](../distance/bray_curtis.md) dissimilarity metric, which measures the differences in abundance of bacterial taxa between samples.

Next, we would run an adonis test with light exposure and temperature as our grouping variables. The output from this test would tell us whether there are significant differences between groups based on these variables.

## Assumptions

It's important to note that the adonis test is a non-parametric test, which means that it does not assume any particular distributional form for the data and can handle violations of assumptions such as normality or homogeneity of variance. However, it still assumes independence and multivariate structure in the data.
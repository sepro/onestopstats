---
sidebar_position: 3
---

# Principle Coordinate Analysis (PCoA)

Principle Coordinate Analysis (PCoA) is a multivariate statistical technique used to visualize and analyze similarities or dissimilarities between samples or groups of samples. It is a method of dimensionality reduction that takes a distance matrix as input and produces a set of new variables, called principal coordinates, that capture the maximum amount of variation in the data.  PCoA tries to preserve the distances between samples in higher dimensions when reducing the dimensionality of the data. It does this by projecting the data onto a lower-dimensional space while preserving as much of the original distance information as possible.


## Use Cases

PCoA can use a variety of distance metrics to quantify the similarities or dissimilarities between samples or groups of samples. Here are some examples of commonly used distance metrics:

1. **Euclidean distance:** This is the most commonly used distance metric in PCoA. It measures the straight-line distance between two points in a multidimensional space. For example, if we have two samples with three attributes each (x, y, and z), the Euclidean distance between them can be calculated as: 

   `distance = sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2)`

2. **Bray-Curtis dissimilarity:** This distance metric is commonly used in ecology to measure the dissimilarity between two samples based on their species composition. It calculates the absolute differences between the proportions of each species in the two samples, and then sums these differences. For example, if we have two samples with four species each, the Bray-Curtis dissimilarity between them can be calculated as:

   `dissimilarity = (|a1 - a2| + |b1 - b2| + |c1 - c2| + |d1 - d2|) / (a1 + a2 + b1 + b2 + c1 + c2 + d1 + d2)`

   where a, b, c, and d represent the number of individuals of each species in each sample.

3. **Jaccard distance:** This distance metric is commonly used in ecology and genetics to measure the dissimilarity between two samples based on their presence or absence of certain traits or markers. It calculates the proportion of traits or markers that are present in one sample but not the other. For example, if we have two samples with five traits each, the Jaccard distance between them can be calculated as:

   `distance = (number of traits present in one sample but not the other) / (total number of traits)`

   For instance, if sample 1 has traits A, B, C, and D, and sample 2 has traits B, C, D, E, and F, the Jaccard distance between them would be 3/6 = 0.5.


## Assumptions

PCoA makes the following assumptions:

1. **Distance metric:** PCoA assumes that the distance metric used to calculate the distance matrix is appropriate for the data and research question. The choice of distance metric should be based on the nature of the data and the research question.

2. **Linearity:** PCoA assumes that the relationships between the samples or groups of samples are linear. This means that the differences between samples can be represented as a linear combination of the principal coordinates.

3. **Independence:** PCoA assumes that the samples or groups of samples are independent of each other. This means that the value of one sample should not be influenced by the value of another sample.

4. **Homogeneity of variance:** PCoA assumes that the variance of the data is homogeneous across all samples or groups of samples. This means that the spread of the data should be similar across all samples or groups of samples.

If these assumptions are not met, the results of PCoA may not be reliable. It is important to check these assumptions before using PCoA and to consider alternative methods if they are not met.

## Potential Issues

While PCoA can also be used to identify clusters, it is a linear technique that may not be as effective at capturing the complex relationships between samples that give rise to clusters. t-SNE and UMAP are more flexible and can capture more complex relationships between samples, which makes them better suited for identifying clusters in many cases.

## Conclusion

PCoA is a powerful multivariate statistical technique that can help visualize and analyze similarities or dissimilarities between samples or groups of samples. It can reveal patterns or clusters in the data, and can provide valuable insights into the factors that influence these patterns.

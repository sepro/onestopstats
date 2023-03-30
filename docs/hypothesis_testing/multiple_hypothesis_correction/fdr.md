---
sidebar_position: 4
---

# False Discovery Rate (FDR)

False Discovery Rate (FDR) is a statistical method that is used to control the number of false positives when testing multiple hypotheses simultaneously. In simple terms, it helps to control the rate at which we falsely identify something as significant when it is actually not. 

For instance, if we are testing several hypotheses at once, we might find some results that look significant by chance but are actually not. FDR helps to reduce the chances of reporting these false positives. 

## Use Cases

Let's say a group of researchers is testing a new drug for a disease. They conduct a study with 100 patients and measure the effect of the drug on 100 different genes. 

If they test each gene independently with a significance level of 0.05, they would expect to see 5 false positives (i.e., genes that appear significant by chance). However, if they use FDR control, they can adjust the significance level for each gene, so that the overall rate of false positives is controlled at, say, 5%. This means that out of the 100 genes tested, they would expect to see 5 genes that are falsely identified as significant. 

By using FDR control, the researchers can ensure that they are only reporting significant results that are likely to be true and not accidentally claiming that the drug works when it actually does not.



# ConsortiaFlux

Our web application source code can be found on the iGEM Software Organization
[Toronto-2015](https://github.com/igemsoftware/Toronto-2015) repository.

### Brief Description:

Bacteria generally occur in communities, whether they be in dirt, in water, in the air, on skin or in the gut. In microbial communities, the survival of all species are interdependent; the biochemical and behavioral activities of one species provides the necessary metabolites and living environment for another<sup>[1]</sup>. Many approaches have been developed for predicting flux distributions in the metabolic network of one species using flux-balance analysis (FBA) in order to optimize for biomass or product formation<sup>[2,3]</sup>. Flux-balance analysis has been used for a variety of applications, including drug target identification by evaluation of gene essentiality, knowledge-gap filling of metabolic models and metabolic engineering of E. coli for lycopene synthesis<sup>[4,5,6]</sup>. However, algorithms to perform FBA at a community level have been rare and complex (often using non-linear programming and presenting high difficulty for solvers). In community FBA (cFBA), the exchange of metabolites between species, the biomass, relative fitness, and competitive ability of each species affects metabolic flux within the community as well as within each individual species<sup>[4,5,6]</sup>.

ConsortiaFlux, a web-based tool developed by the Toronto iGEM Team, carries out cFBA between bacterial species custom-chosen by the user via a __linear-programming algorithm__, and displays the results through an interactive and easily-understandable node-edge visualization.

### Web Application: Framework of the ConsortiaFlux Interface

ConsortiaFlux was developed using D3.JS, a JavaScript library for creation of interactive networks using nodes and edges. The object of the ConsortiaFlux tool is to visualize and manipulate community-level metabolic networks in the tool’s _“extracellular view”_ in addition to visualizing species-specific cytoplasmic networks in the _“cytoplasmic view,”_ to present flux distributions in each of these views, and to present changes in flux distributions occurring from any alterations made to the metabolic network. Asynchronous calls to the backend optimize the network using our python script, which in turn uses COBRApy, a constraint-based modeling package used to model metabolic networks from metabolic models in SBML (Synthetic Biology Markup Language) and XML (Extension Markup Language) formats.

### Data Collection

The SBML and XML were gathered and obtained from bioinformatics websites such as Model SEED<sup>[10]</sup> and EMBL-EBI<sup>[11,12,13]</sup> as well as directly from some research articles<sup>[14-19]</sup>. All SBML and XML files collected were used to contribute and help calculate the FBA in ConsortiaFlux. What we looked for when searching for SBML and XML files of our selected species were certain specific compartments such as extracellular ('compartment id=”e”' or 'compartment id=”e0”') or intracellular ('compartment id=”i”').

### Algorithm

Firstly, we create metabolic models in SBML file format for each individual species that are present in the community. Each metabolic model is tailored for content, and include external metabolites and reactions contributed from other species in the community. Thus, the extracellular space of each metabolic model is unique to each individual species, despite the fact that all members belong to the same community. After the creation of individual metabolic models, we use COBRApy to optimize for each model's biomass objective function, and subsequently store the solutions in text files. Using the solutions, we calculate and store the averages and standard deviations for all shared reactions in the community in a new text file. Following this, we change the upper bound and lower bound of each reaction of all the species’ models to the average flux value plus two standard deviations and the average flux value minus two standard deviations, respectively. With our new constraints on shared reactions, we perform flux-balance analysis iteratively for each model with COBRApy once again, optimizing for each respective biomass objective function. We then store each of the flux values returned by the objective function for each species in a new text file. We take the flux values and calculate standardized z-scores by comparing all values. Fractional biomass coefficients are then calculated for each species by taking each species' respective z-score and diving by the sum of the z-scores for all species; these values will also be stored in a new text file. (The sum of all fractional biomass coefficients should be equal to one.) Lastly, a community metabolic model will be created where species are treated as if they were the metabolic compartments of a community 'organism'.

Furthermore, the constraints in the model and/or variables in the objective function for the community model will be weighed by their respective fractional biomass coefficients, depending on which species the constraint or variable belongs to. Constraints and/or variables for reactions that are shared between species will be weighed as the sum of the fractional biomass coefficients for the species involved. In our final step, COBRApy will be used to optimize for the community biomass objective function, which is defined as the weighed summation of the biomass objective functions of all species. The resulting vector of fluxes is expected to be representative of real-world experimental data.  

### Web Application: User Interaction

With ConsortiaFlux, users have the ability to choose between viewing displays of the extracellular metabolic network of one species, the extracellular metabolic network of multiple species, the cytoplasmic-periplasmic metabolic network of a single species, or a specific metabolic pathway within one species. The visualization will include small circular nodes that represent metabolites, hexagonal nodes that display reactions, big circular nodes that represent species, and arrows to define a particular pathway between the nodes. Users have the ability to add in pathways (metabolites and reactions) and remove pathways either from data provided by our web tool or based on outside sources of experimental data. FBA calculations and optimizations will occur on the backend and results will be displayed on the network as visually discernible changes in the thickness of the arrows. Users can also zoom into the network an  reposition the network and its subparts via mouse-dragging. Finally, users will have the option of storing experimental data and optimization settings for future use.

### References

1. Zelezniak, Aleksej et al. “Metabolic Dependencies Drive Species Co-Occurrence in Diverse Microbial Communities.” Proceedings of the National Academy of Sciences of the United States of America 112.20 (2015): 6449–6454. PMC. Web. 9 Sept. 2015. http://www.ncbi.nlm.nih.gov/pmc/articles/PMC4443341/

2. Radhakrishnan Mahadevan, Jeremy S. Edwards, Francis J. Doyle III, Dynamic Flux Balance Analysis of Diauxic Growth in Escherichia coli, Biophysical Journal, Volume 83, Issue 3, September 2002, Pages 1331-1340, ISSN 0006-3495, http://dx.doi.org/10.1016/S0006-3495(02)73903-9 (via http://www.sciencedirect.com/science/article/pii/S0006349502739039).

3. Jong Min Lee, Erwin P. Gianchandani, and Jason A. Papin, Flux balance analysis in the era of metabolomics, Brief Bioinform 2006 7: 140-150.

4. Raman K, Rajagopalan P, Chandra N. Flux balance analysis of mycolic acid pathway: targets for anti-tubercular drugs. PLoS Comput Biol 2005;1:e46.

5. Oberhardt MA, Puchalka J, Fryer KE, et al. Genome-scale metabolic network analysis of the opportunistic pathogen Pseudomonas aeruginosa PAO1. J Bacteriol2008;190:2790-803.

6. Alper H, Jin Y-S, Moxley JF, et al. Identifying gene targets for the metabolic engineering of lycopene biosynthesis in Escherichia coli. Metab Eng 2005;7:155-64.

7. Khandelwal RA, Olivier BG, Röling WFM, Teusink B, Bruggeman FJ (2013) Community Flux Balance Analysis for Microbial Consortia at Balanced Growth. PLoS ONE 8(5): e64567. doi:10.1371/journal.pone.0064567

8. http://journal.frontiersin.org/article/10.3389/fmicb.2014.00125/full

9. http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002363

10. Henry, C.S., et al. High-throughput Generation and Optimization of Genome-scale Metabolic Models. Nature Biotechnology 28, 977-982 (2010).

11. Li C., Courtot, M., Novere N.L., and Laibe C. BioModels.net Web Services, a free integrated toolkit for computational modeling software. Brief Bioinformatics, 11 (3), 270-277 (2010).

12. Buchel F., et al. Path2Models: large-scale generation of computational models for biochemical pathway maps. BMC Systems Biolgoy 7 (116), doi:10.1186/1752-0509-7-116 (2013).

13. Novere, N.L., et al. BioModels Database: a free, centralized database of curated, published quantitative kinetic models of biochemical and cellular systems. Nucleic Acids Res. 34 (Database issue), D689-D691 doi:10.1093/nar/gkj092 (2006).

14. Orth J.D., et al. A comprehensive genome-scale reconstruction of Escherichia coli metabolism – 2011. Mol Syst Biol. 7 (535), doi: 10.1038/msb.2011.65 (2011).

15. Sohn S. B., Kim T. Y., Park J. M. and Lee S. Y. In silico genome-scale metabolism analysis of Pseudomonas putida KT2440 for polyhydroxyalkanoate synthesis, degradation of aromatics and anaerobic survival. Biotechnology Journal. 5 (7), doi: 10.1002/biot.2010000124 (2010).

16. Imam S., et al. iRsp1095: A genome-scale reconstruction of the Rhodobacter sphaeroides metabolic network. BMC Syst Biol. 5 (116), doi: 10.1186/1752-0509-5-116 (2011).

17. Sengar R. S., and Papoutsakis E. T. Genome-Scale Model for Clostridium acetobutylicum: Part I. Metabolic Network Resolution and Analysis. Biotechnol Bioeng. 101 (5), 1036-1052 (2008).

18. Nogales J., et al. Detailing the optimality of photosynthesis in cyanobacteria through systems biology analysis. Proc Natl Acad Sci USA. 109 (7), 2678-2683 (2012).

18. Gonnerman M. C., et al. Genomically and biochemically accurate metabolic reconstruction of Methanosarcina barkeri Fusaro, iMG746. Biotechnology Journal. 8 (9), 1070-1079 (2013).

# Project Results

## Computational Biology Results

When starting the software track, one of the first challenges that came across was the lack of experience in developing the entire web application from the team members as most have a biology/life science background.  During the first couple of months we began teaching several members of the dry lab team about Node.js and Javascript along with MongoDB which ended up playing a pivitol role on the whole development of the application.   

The initial design for the front end was to focus on a popular API called D3. Initially we thought it would be a great solution espiecelly with the strong API on the barnes hut algorithm to calculate forces which resulted in nlgn runtime.  The problem however was that putting all of design into D3 meant that we had to rely on HTML DOM elements to be updated, and so when having nodes greater than 200 frame rates dropped significantly and slower computers were unable to run and it would eventually crash. So we researched other API’s, such as sigma.js, which ended up not working out due to their poor force layout.  Finally we ended up using HTML5 Canvas and D3’s barne’s hut implementation to get the best frame rate using the least amount of resources possible, allowing it to be scalable to 1000s of nodes, and even mobile friendly.  After overcoming that first challenge, a second challenge arose.  

Structuring how the nodes and species were to be displayed was a difficult task. Initially the app design was you saw the entire specie of Ecoli for example, and it would show roughly 200 -400 nodes of links and reactions which is very overwhelming and useless to the user. So we changed the user interface design. The new plan then was to have multiple specie nodes have the links between each other limiting the amount of links and reactions to a reasonable level for the user to interact and not feel overwhelmed. If the user wanted to enter the specie, they would go inside the node, and see the Cytocell, peroplasm and extercellular with all the links and reactions, finally you are able to enter the last layer of nodes we ended up splitting them into sub systems, but the main issue was that not all reactions/metabolites had sub systems, so that was another challenge we faced.   

Initially the plan to approach this hyper-graph like structure was to apply a nested graph structure, but in turn it ended up backfiring due to the fact that we did not utilize recursion, and it was not scalable. In the end we ended up with a much simpler design pattern using a tree, and each tree node would contain a graph, modelling the entire network with graphs, utilizing each level of the tree, and entering the graph when needed allowed simplicity to the data structure as well as better organization.  

[Julian add]

[Anthony add CFBA]

### Computational Biology Future Applications
This software can be applied in the future to many aspects of bacterial community studies, including numerous applications in human health and medicine. 
Our system of community flux balance analysis (cFBA) used the specific example of optimiziation for maximal toluene degradation within the microbial system of Athabasca oil sands tailings pond water, in order to best detoxify this water to be potable to inhabitants living downstream. However, the future uses for this tool could be far-reaching in nature.  
This system has already been used for a wide range of projects including pinpointing pathogenicity islands in strains of bacteria which can be harmful to human populations (Raman and Chandra, 2009), assessing how rice plants can be optimized to best respond to flooding (Lakshmanan et al. 2013), and achieving spatiotemporal amalgamation of overall metabolism in other crop plants (Grafahrend-Belau et al. 2013). Even more significant achievements could prevail with this technology, such as further simple analysis of gut microbiomes in patients with gastrointestinal illness. With the future of cFBA and metabolic mapping, biological and medical research will no doubt leap forward with innovation.

# Wetlab Results

### Wetlab Goals:

Our main goal in this project was to increase the efficiency of toluene degradation by creating a plasmid that produces the tod E and tod F gene that are crucial steps in the toluene degradation pathway. This process required the design and assembly of a plasmid optimized for E.coli, the transformation of E.coli with the plasmid, the confirmation of protein formation and the subsequent characterization of enzymatic activity. We subsequently also aimed to incorporate the complete toluene degradation pathway in E.coli to observe the complete degradation of toluene to carbon-dioxide and water, which would essentially further verify the success of our created plasmid.

### Achieved:
Following are listed the goals we are able to accomplish
__Plasmid design__:  
--Add picture--[Plasmid](one I sent you before)

* This was perhaps one of the most critical stages of the project since only a correctly designed plasmid would ultimately allow E.coli to successfully degrade toluene. For this purpose, we sought extensive guidance from our graduate and faculty supervisors who have had extensive experience in these areas.


* __Plasmid creation__:  
We were able to successfully create our plasmid by using the backbone obtained from the igem registry. This process involved continuous use of microbiology techniques to assemble each part. At the same time, we needed to verify the correct assembly of our plasmid by repeatedly using techniques like electrophoresis. This was a bit challenging given that we are creating a completely new kind of plasmid hence the standard protocols used in these experiments were not always completely effective so we had to modify our protocols to achieve the best possible results with respect to plasmid design. This did provide us with major insight regarding how standard protocols need to be modified in novel situations.

* __E.coli transformation__:
We have been able to transform E.coli with our plasmid and we have obtained colonies on antibiotic selection media which indicates that our plasmids have been transformed.

### Challenges faced:
* __Time Management__:  
This is where we struggled the most. This year we had recruited a fresh team and each member had to be trained in biosafety. At the same time the department had several administrative procedures that took long to clear and hence we were not able to work in lab on time. This has allowed us to formulate a concrete strategy for next year, so we can make best use of our time in the lab.

* __Division of labour__:  
Due to the relative inexperience of many newer members in the lab, team leads had to take on the role of performing the tasks themselves. This disrupted the structure of the team.


###References: 
Ramen and Chandra. Flux balance analysis of biological systems: Applications and challenges. *Brief Bioinform*, 10:4, pg.435-449. 2009.   
Lakshmanan et al. Elucidating rice cell metabolism under flooding and drought stresses using flux-based modelling and analysis. *Plant Physiology*, 162:4, pg.2140-2150. 2013.    
Grafahrend-Belau et al. Mutliscale metabolic modeling: Dynamic flux balance analysis on a whole-plant scale. *Plant Physiology*, 163:2, pg.637-647. 2013.   

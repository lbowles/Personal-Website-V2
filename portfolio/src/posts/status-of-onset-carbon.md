---
title: "Onset Carbon: Where It Began to Where We Are Now"
date: "2023-07-20"
---

## Conception

Onset Carbon was officially founded in May 2022, but it's initial conception was an evolution of ideas. First, let's outline the team. Stephan Cilliers, who I have been friends with and worked together on various ventures since high school, made up the core team. It was at a small German deli (Hartlief's) where we met up with our first soon-to-be senior advisor Fritz Milosevic.

To lay the backdrop Stephan and I were busy exploring the new ReFi (Regenerative Finance) space around that time. We were introduced to the space through KlimaDAO, whose mission was to use on-chain carbon credits paired with an incentive mechanism to remove large quantities of low-quality credits from the market in order to drive up the price of carbon credits as a whole. This would theoretically incentivise companies to reduce their emissions rather than offsetting them at a higher expense.

The backbone of the ReFi space was the new innovation of bringing traditional carbon credits on-chain, which then allows them to take advantage of all the features of being housed on decentralized programmable blockchains. Let's go over some of the key concepts that explain the ReFi space:

### Carbon Credits

Traditional carbon credits are a type of environmental credit that represents the reduction of one tonne of carbon dioxide or the equivalent of other greenhouse gases from the atmosphere. Carbon credits can be bought and sold by individuals, businesses, and governments. In theory, they can be used to offset emissions (through retirements) from activities such as driving, flying, and heating homes. Retirements can be done by destroying the credits or by permanently storing them in a way that they cannot be used again. There are various methodologies and standards on how these credits are made but I will go a bit deeper into my thoughts on the carbon market as a whole later.

### Digitization of Credits

Toucan Protocol was the first project to digitize carbon credits, bridging them over to the Polygon blockchain. Credits can be transferred onto the blockchain via “Carbon Bridges” which are connected to traditional registries like Verra and Gold Standard. Once bridged, the credits are represented as digitised tokens, similar to the ERC20 standard on Ethereum. You can think of these credits as a building block, upon which applications and projects can be built upon. The most simple application is the ability to retire these credits on-chain through a process called burning, where the tokens are sent to an inaccessible address.

### Benefits of On-chain Credits

- **Increased transparency:** Blockchain can help to increase transparency in the carbon market by recording all transactions on a public ledger. This makes it possible to track the ownership of carbon credits and verify their authenticity. Traditional solutions available today don't offer much in terms of proof of carbon retirements, normally supplying you with a replicable pdf as a certificate.

- **Reduced fraud:** As one of it's core features blockchain can help to reduce fraud in the carbon market by making it difficult to counterfeit or double-spend carbon credits.

- **Increased efficiency:** Purchasing of carbon credits can be done instantly due to the DeFi infrastructure of open market liquidity pools, it comes with the added benefit of removing red tape and jurisdictional redundancies which often make the carbon market inaccessible to smaller participants. Performing a retirement is also instantaneous and made within one transaction. This is a huge advantage compared to traditional methodologies which can take days or weeks just to confirm a single retirement.

- **Fractionalised offsetting:** When purchasing and retiring a carbon credit with Web2 methodologies, you were typically only given the option to buy full credits. But with the tokenised credits they are atomised, allowing very small fractions of credits to be offset. This comes in handy as it allows our solution to offset small amounts associated with every individual purchase.

- **Reduced costs:** Purchasing and using carbon credits on-chain is also relatively inexpensive as most of the DeFi infrastructure is housed on energy-efficient blockchains with low transaction fees like Polygon or Celo.

Throughout our initial meetings with Fritz, we discussed a few primitive ideas on how we could make a product or provide a service utilising the ReFi offerings and benefits outlined. These were simple ideas such as basic on-request carbon offsetting for customers that would be executed manually. Despite not having anything concrete we concluded that there were definitely fruitful opportunities and problems to be solved. What would then become the first “product” under the Onset Carbon suite actually started off as a simple unrelated side project. At the time there were a few on-chain offsetting tools, but no easy way to showcase the retirement. If you wanted to prove your retirement you could look at a blockchain explorer which showed the transactions that took place, it looks something like this:

![Transactions](/img/posts/Status-Of-Onset/polyscan.png)

<https://polygonscan.com/tx/0x41ac70a9a74accbad7ce2ad44b340bfda850074f0c061749269e11dbfad10cb4>

Now even someone familiar with the blockchain space would find that hard to decipher, plus it doesn't have an easy way to trace all the other information about the credit you retired. That’s why we built our verification tool. This displays all the important information from the retirement, like who made the offset all the way over to the credit and registry information. It also verifies that the credit was bridged legitimately. It looks like this:

![verify1](/img/posts/Status-Of-Onset/verify1.png)
![verify2](/img/posts/Status-Of-Onset/verify2.png)

<https://verify.onsetcarbon.com/#/tx/0x41ac70a9a74accbad7ce2ad44b340bfda850074f0c061749269e11dbfad10cb4>

The verification tool ended up gaining some traction from the community and amplified our interest in making projects in this space. From there our various conversations in the community and curiosity in the realm of tackling climate issues, lead us to the question “Why isn't there just an API for carbon offsets”. Now I’ll be honest, the duration of time since the statement “We are going to build a blockchain-powered carbon offsetting API, why is’nt anyone doing this.” till actually discovering that we indeed do have competitors, whilst not many, is rather embarrassing.

Just to clarify our idea, it was to build an API (Application Programming Interface) that would allow any business to integrate real-time, publicly verifiable carbon offsetting into their applications or operations. The use case I like to share is a ridesharing company, like Uber, would integrate our technology into their app, allowing users to offset their trip’s emissions with the click of a button. We would then send the customer a verification certificate using our tool as proof of their retirement. There have been various platforms for a while now that offer traditional carbon offsetting and yet there was very little utilisation by consumers. So we figured that it's rather a problem of accessibility to climate action. Our solution sought to remove the barriers of entry by bringing carbon offsetting right to the consumer in every form of transaction they make. We know consumers increasingly care about the environment, but they simply don't want to go out of their way to calculate and manually offset their emissions.

## Big Ambitions

So that was that. We thought we had found a gap in the market and had the big solution backed by the latest tech to solve it. We really ramped up our efforts from that point going into full “startup mode”. Reflecting back, there were a few things we could have handled differently, mainly due to our lack of experience at the time.

Building a large successful startup has been a long-term dream for Stephan and I. We even started a software development company in high school which ended up building some pretty cool projects, giving us the confidence to go into this new venture. We really got the sense that we had stumbled upon something big, and I still do. But we often neglected some key details in order to morph our company into an idealistic startup, trying to force it to follow conventional norms. I still remember consuming copious amounts of Y-combinator podcasts, constructing what it would look like to have a successful startup and how one should get there. But it's easier said than done.

I think our first issue was having a slight obsession with getting VC funding so early on. This mainly stemmed from the amount of capital a company raises being associated with a metric of success. This is the wrong way to go about it. To be honest we were already trying to raise funding without any clear plan of how to spend the money. We should have been putting more emphasis on enhancing our product, acquiring customers and finding product market fit before thinking about raising capital.

Doing the technical work is one area Stephan and I are very good at. The issue is we tended to be a bit tunnel-visioned whilst delving into the development sprints, that we sometimes veered off-track from the main business goals and needs. We should have balanced our time by asking ourselves if we were on the right path or if we needed to adjust. In the end, we have put out some solid products that demonstrate that the technical capabilities are there, but we needed more efforts on the commercial front.

While the enterprise-grade API is in progress, we did ship our proof of concept e-commerce storefront that uses a primitive version of the API. It allows anyone to purchase and retire carbon credits with a credit card and was the first of its kind to use on-chain credits. This is later what got us grant funding from Prezenti Grants (From the Celo Blockchain Community). This was a big boost of confidence that we needed, it helped solidify that it wasn't just us that saw the larger potential of what we were building.

![offsetStorefront](/img/posts/Status-Of-Onset/offset.png)

<https://offset.onsetcarbon.com/offset>

## A Carbon Market That Needs Improvement

Now this leads me to a more controversial segment, and it's one topic that I never expected to be writing about when I got into this space. The premise of carbon credits themselves makes perfect sense to me. You as a consumer or company produce X amount of C02, you purchase a carbon credit that represents X amount of C02 and use it to offset your emissions, X-X=0. But here's the problem, your assumption may be that the credit represents X amount of C02 that has been "removed" from the atmosphere in order for that equation to make sense, but that's not always the case. Not all carbon credits are made the same and according to The Berkeley Carbon Trading Project, only around 6% of the carbon credits issued in 2021 can be classified as “removal” credits. Some of the common removal methodologies are:

###

- **Afforestation and reforestation:** Planting trees and other vegetation to absorb carbon dioxide from the atmosphere.

- **Direct air capture:** Using technology to remove carbon dioxide directly from the air.

- **Bioenergy with carbon capture and storage (BECCS):** Using biomass to generate electricity or heat, and then capturing and storing the carbon dioxide emissions.

- **Soil carbon sequestration:** Increasing the amount of carbon stored in soil by planting cover crops, reducing tillage, and other practices.

- **Ocean fertilization:** Adding nutrients to the ocean to stimulate the growth of algae, which absorb carbon dioxide.

While all of these methodologies have their advantages and disadvantages my favourite one is afforestation/reforestation as it has the added benefit of restoring wildlife habitats and is also more cost and energy effective than the alternatives. The potential for scale is also far greater compared to the others that are still relatively new and untested concepts. So, the other vast majority of non-removal credit methodologies produced are:

###

- **Renewable energy credits (RECs):** These represent the environmental attributes of renewable energy generation, such as solar and wind power. When you purchase RECs you are essentially supporting the development of renewable energy projects.

- **Energy efficiency credits (EECs):** Similar to RECs they represent the energy saved through energy efficiency measures, such as installing energy-efficient appliances or lighting.

- **Conservation credits:** The claim is they represent the carbon that is stored in forests being protected from deforestation.

- **Waste avoidance credits:** Represent the waste that is prevented from being sent to landfills or incinerators.

Now I do believe there is a strong use-case for these initiatives in combating climate change, the water is just murky when they are represented in the form of C02 credits that are then used to “offset” emissions. These mechanisms mainly support the prevention of future emissions being generated which is good, but with the current amount of excess C02 in our atmosphere we are in dire need are carbon removal. Also, the sheer quantity of these credits makes their cost very low, and in the current setup, it allows large corporations to “offset” their emissions at a fraction of the price compared to changing their process to reduce their carbon footprint. This leads to the whole greenwashing situation commonly associated with carbon credits.

The way these credits are certified by verification bodies such as Verra and The Gold Standard has stirred up certain controversies, but it’s a bit outside my domain of expertise to give a strong standpoint on that yet. In short, there is a range of verification methods with varying accuracy, producing low-quality to high-quality credits. However there are some promising new technologies being used in the verification and standardization of these projects that can help enhance their quality. For example, satellite imagery can be used to monitor reforestation projects and track changes in forest cover over time. This can help ensure that carbon credits are only issued for projects that are actually reducing emissions and that the credits are accurately quantified. There is yet another opportunity for blockchain technology to be used in verifiably storing this sensing data or even allowing real-time credit issuance.

![offsetStorefront](/img/posts/Status-Of-Onset/satellite.png)

I do think this topic is being discussed more, and there does seem to be a change in sentiment within the industry as we see a greater number of removal projects getting approved. It just takes a while for these new projects to come to fruition and be realized as credits. Just think how long it takes for an entire forest to grow.

## Viability and Realizations

Startups are hard, and as expected we did run into a few more unplanned challenges, but where’s the fun if there are no problems to solve?

### Go-to-market model

From the get-go our goal was to get our service in the hand of as many customers as possible, we wanted them to be saying yes to adding R3 to offset their grocery or petrol purchase. Now this meant running a B2B2C model, so our main clients would be businesses who would then offer this service to their customers. Now this can be a great opportunity for potential clients as it allows them to meet their climate goals, offsetting their unavoidable emissions while gaining immense positive brand recognition from their customers. As part of our offerings, we are building a company profile page which publicly showcases the company's climate action, hopefully incentivising healthy competition between their competitors.

Now despite having a team of advisors with extensive experience in the commercial enterprise world, in its current setup Stephan and I would still have to be leading customer acquisition. This is a daunting task and is something that will take more time and experience from our side to properly succeed at. Making it slightly more difficult, our main target market is large enterprises as they are the ones with the real carbon output. They are also capable of following through with the lengthy integration costs that come with a project like this. We are exploring options to have a setup where our senior advisors like Fritz can be more involved in the project and allow more of their domain expertise to boost Onsets growth.

### South African market entry

Although Onset Carbons' mission is global, one differentiating factor from our competitors is that we are proudly positioned in the African market. This means that our first clients are most likely going to be based in South Africa as we need to build our reputation before tackling the overseas markets. Now as South African readers are well aware, there are many various economic and environmental factors making the adoption of carbon mitigation services unattractive. While one might argue offsetting the emissions from running generators to combat loadshedding is a good opportunity, the additional costs for climate action are simply not high on the priority list. Another issue is with the current inflation and the social-economic divide, many South Africans don't have the means to monetarily contribute towards climate action. Making the choice for a South African based company to adopt a service like Onset Carbon is slightly more complex than in other regions. Nevertheless the market as a whole is extensive and I am still confident we will reach the right clients in due time.

### Carbon emission estimation

While we have made good progress in our API's ability to make immediate offsets, an area that we next need to address is emissions estimates. As we discovered while talking with potential pilot partners for our API, estimating the carbon emissions of individual products is no easy task. While this is something that Onset Carbon won’t be building directly (there are existing solutions offering emissions estimations from large-scale databases), if we want to ensure high accuracy we will have to cater for more bespoke requirements and work closely with our clients during the integration process. This may also require expanding the team to have more environmental experts to help with this aspect.

### Carbon credit availability

As I touched on earlier the quality of carbon credits varies greatly, at Onset Carbon we are only comfortable with releasing a carbon offsetting API when we have access to high-quality removal credits that have a tangible impact. Availability for these credits in the traditional market is scarce, and even more so on the on-chain marketplace due to complications with bridging being halted for the time being. This is supposedly set to reopen soon as credit registries like Gold Standard work with on-chain protocols to make a more optimized bridging solution. So we will be waiting until we get a secure source of quality credits, it just might take some time.

## Future Plans

Onset Carbon is a project that I have loved working on, I have learned and continue to gain invaluable experience from it. This is a project that the team has dedicated so much time and energy towards, and it’s the end goal of enabling real-world climate action that keeps us going. While it is hard, both Stephan and I realize that in order to increase the viability of Onset Carbon succeeding, we may have to spend more time gaining real-world industry-level experience to obtain the necessary technical and business skills to take it further. This does not mean that we will be halting working on Onset entirely, but it does mean a slowdown in pace for the time being.

Sorry this is my first blog post and I realise that it's pretty long, hopefully some of it was insightful.

Cheers,
Luke

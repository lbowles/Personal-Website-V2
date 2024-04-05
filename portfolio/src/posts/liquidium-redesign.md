---
title: "Liquidium: Leading a System Redesign"
date: "2024-04-06"
---

## Intro

Since joining the team I have seen Liquidium go from $50k to over $45Mill+ in total volume. Most of this came in the last couple of months as we experienced a textbook case of hockey stick growth, which every startup dreams of. As we foresaw the need to upgrade our infrastructure to handle the future growth I was given the opportunity to lead a full redesign of our application. Today I’ll be breaking down this process.

![Map](https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/April%205%20Screenshot%20from%20ezgif-JEDGyaI4Nh87mty0ACJL6Kt4r8GNl8.webp)
<https://geniidata.com/user/Shudufhadzo/liquidium>

## A rundown of Liquidium

Bitcoin has been experiencing rapid growth in the inscription space. Driving this is ordinal inscriptions, which are a type of NFT on Bitcoin. Bitcoin doesn't natively have the programmability of other blockchains like Ethereum, so it uses a more hacky method. Inscriptions store data directly onto individual satoshis (the smallest unit of bitcoin), using the UTXO model for management and transfer. These inscriptions can embed content, such as images (e.g. Ordinals) or text, into a specific satoshi, making each inscribed satoshi unique.

![Map](https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/Screenshot%20Apr%205%20from%20ezgif-NUyVJOn0zX2O3JktUEMdOaY1qol5rq.webp)
<https://bestinslot.xyz/ordinals/inscription/60583796>

Liquidium is a DeFi protocol that enables borrowers to access liquidity (Bitcoin) by using their inscription as collateral, while allowing lenders to earn interest on their Bitcoin. Lenders make loan offers based on the floor price of a collection. For instance, if the lowest-priced ordinal in the OMB collection is valued at ₿1, a lender might offer a loan of ₿0.8. The protocol sets the loan terms, such as a 2% interest rate over 10 days. Upon accepting an offer, borrowers receive the loan amount in Bitcoin, and their collateral is held in secure escrow. Repaying the loan plus interest returns the collateral to the borrower while failure to repay results in the lender acquiring the ordinal, potentially selling it at the floor price for a profit. All the bitcoin processes here are facilitated by decentralised DLCs (Discreet Log Contracts).

### Lending on V0.3

![Map](https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/lending-hb3Sd0HLdrZh61LTXqvuG06gz5bXKU.webp)

### Borrowing on V0.3

![Map](https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/borrowing-ajZZ35jC5piWeCMrlr8sP1lkw9BK7C.webp)

## Assessing the current system

The current version of the app (V0.2) was the second iteration at Liquidium, its biggest change was moving away from borrowers making the offers on individual offers with custom terms to us setting the terms and letting lenders make the offers based on collections. This drastically decreased the gap between what borrowers and lenders wanted, as typically borrowers were setting outlandish loan requests with unrealistic terms. We were still in the MVP stage and without product market fit. This led us to choose a less customisable tech stack as it allowed for more rapid change.

The app was built using React and Google Firebase, with the Bitcoin DLC logic handled by our partner's API. While the core functionality of the app remains secure and operational, the greatest weakness was Google Firebase, preventing us from expanding the functionality and complexity of the application. The main issue is that Google Firebase is a non-relationship database. A non-relational database stores data without the structured mechanism of tables linked by relationships. This model offers flexibility and scalability for certain types of applications but presents challenges for complex operations that rely on multiple, interrelated datasets. The other issue with Firebase was our reliance on its cloud functions, which greatly hindered the performance of the application. The UI was also intuitive with simple layouts, but it was lacking that modern look and feel.

Given the rapid development of the MVP version, the codebase grew extensively and lacked the necessary structure for sustainable expansion. The interdependency between multiple components made a refactor of the codebase unattractive, aiding in the decision to start with a complete codebase redesign. We knew starting from a clean slate was essential for us to expand our offerings and maintain a competitive edge.

### V0.2

![Map](<https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/Screenshot%20Apr%205%20from%20ezgif%20(1)-aZ5WvQ673MgbHbAeGQDQobRORD42bJ.webp>)

## Picking the new tech stack

We had to carefully consider factors, such as our current development team's depth and the resources available to us. Our dev team consisted of just our CTO Peter and myself, although we were in the process of recruiting a new backend developer, Sam. It's crucial to plan how development resources will be allocated, keeping in mind that we still had a live product to maintain, which can be time-consuming. The choice also has significant implications for future hires. Opting for a particular programming language and infrastructure can limit the pool of candidates available. This was a driving reason behind our decision to use a cohesive TypeScript solution, as it is an extremely popular language that can be used for both frontend and backend development. TypeScript's versatility and adoption made it a solid choice.

After a bunch of research and comparison tables, we decided to build our application using Next.js. It provided a good balance between customizability and development speed while offering a strong level of scalability. Next.js’s server-side rendering and API routes also promised improved load times. Vercels ecosystem was an advantage as their hosting solutions allowed us to focus more on development time rather than worrying about hosting infrastructure.

For our db, we chose PostgreSQL, a proven and standard structured database in contrast to Firebase. PostgreSQL's relational model is better suited to our application's new operations and interrelated datasets.

On the frontend, we used Tailwind CSS in conjunction with Shadcn, a component-based UI framework. This combination allowed us to create a modern and visually consistent user interface while retaining complete control over the underlying code. The use of consistent components streamlined our development process and ensured a more cohesive user experience throughout the application

There are still a bunch of more niche aspects of the architecture that support the core operations but I won't go into depth on that here.The next crucial step was to gather the current features and thoroughly understand how the existing system functioned. We also needed to plan for the new features we wanted to add, as it was vital to have a holistic view of the end system and all its moving parts.

To achieve this, we employed system architecture diagrams and use case diagrams to map out the possible flows of the application and its various states. These visual representations helped us identify potential bottlenecks, dependencies, and areas for optimization. Designing the database schema was also a critical aspect of this process, as it laid the foundation of the application structure.

We then outlined the feature requirements for the future features we needed to implement, such as a public API. You can get lost planning too much for potential features that might not make it to production, so it is important to not let them sway the design decisions too much. But in general, making an adaptable system was a core requirement.

The next challenge was to convert the design into executable projects and tasks. For ticket management, we utilized Notion, which proved to be a surprisingly effective and customizable platform. We tried to follow the agile method to manage the development process. Initially, we created separate parent projects for the frontend and backend, breaking down the tasks for each page segment. The idea was to work on as much as possible independently and then start going into more depth when it came time to merge the frontend and backend. This approach allowed for rapid development up to that point.

However, when it came to integration, we realized that the project tasks weren't working as well as we had hoped. Collaboration between the team members required more alignment and coordination as it had so many interdependent parts. To address this, we ended up using a more barebones approach, consolidating everything into a single document with a massive to-do list. While this may go against what we were taught in university, it proved to be effective in our situation. We prioritized the tasks from top to bottom, using checkmarks to indicate their status. We then worked through the list one by one, from top to bottom. This approach provided a realistic view of the whole project's progress and helped ensure that no aspects were overlooked. Regular stand-up meetings were held to discuss progress, identify roadblocks, and make necessary adjustments to the plan.

As we move forward with more specialized projects in the future, such as a public API, it will be easier to delve deeper into the task breakdown and use more traditional project management techniques.

Despite the challenges, we were able to meet our timelines surprisingly well, which is not very common in software development. This can be attributed to the team's dedication, effective communication, and adaptability to changing requirements. Some features had to be scrapped and not included in the release version, and there was a significant push at the end, requiring a lot of overtime. The team meetup in Germany helped speed things along and correlate the launch from all departments at the company. In the end, we delivered a solid product that met the core requirements and laid the foundation for future iterations.

### Team outing on Zugspitze mountain

![Map](https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/Liquidium%20converter-KNriLzPfxqYzICJXqHWfjFlBJLd3Os.webp)

### Germany - Sam and I pushing code

![Map](https://pwe2sbwwaa3xooz6.public.blob.vercel-storage.com/v0.3/Liquidium%20Update-01ucQuTk6lRVDuwkGsXmgjDiLXAVjf.webp)

## Takeaways

- **Prepared for change:**
  Our project rarely went as planned, with features we thought were critical changes along the way. We had to be okay with stopping the development of a feature mid-way if it meant focusing on core requirements to get the product out.

- **The standard project management methodologies aren't law:**
  While planning guidelines and industry standards are great, there's no law to follow them religiously.

- **Keep communication flowing:**
  Keeping the team in the know on every situation was crucial. We saw a great increase in productivity when the team met in person, as opposed to online meetings (I will leave the stay-at-home vs. work-in-person debate out of this)

- **Find the right tech stack balance:**
  When choosing our tech stack, we had to balance dev time and maintainability. While Vercel seemed like the right ecosystem for hosting and freeing up dev time, we quickly discovered its limitations and promise of vendor lock-in. Thankfully our setup allows us to move to self-hosting.

- **Set measurable goals:**
  We set ourselves key, measurable objectives to track our progress. Without these, it's hard to gauge where you are in the timeline and if you're actually making progress.

If you want to check out the app you can here:

<https://app.liquidium.fi>

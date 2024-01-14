# Portfolio 2024

## Dependencies
- React Router
- Material UI
- Emotion React
- Emotion Styled



## Routes
|       URL               |     Component           |
| ----------------------- | ----------------------- |
| `/`                     | **Home**                |
| `/designs`              | **Designs**             |
| `/full-stack-projects`  | **FullStackProjects**   |



## Components  ➡ 
- `NavigationBar`: contains breakpoint for mobile and desktop navigation
    - `NavLogo`: contains the logo 
    - `MobileNavigation`: Navigation for xs, and sm breakpoints 0 to 899 screens sizes
    - `DesktopNavigation`:Navigation for md, lg and xl breakpoints 900 and above screens sizes
- `Home`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `HomeXS`: componet for xs breakpoint, screens sizes 0 to 599
    - `HomeSM`: componet for sm breakpoint, screens sizes 600 to 899
    - `HomeMD`: componet for md breakpoint, screens sizes 900 to 1199
    - `HomeLG`: componet for lg breakpoint, screens sizes 1200 to 1535
    - `HomeXL`: componet for xl breakpoint, screens sizes 1536 and above

- `Contact`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `ContactXS`: componet for xs breakpoint, screens sizes 0 to 599
    - `ContactSM`: componet for sm breakpoint, screen sizes sizes 900 to 1199
    - `ContactLG`: componet for lg breakpoint, screens sizes 1200 to 1535
    - `ContactXL`: componet for xl breakpoint, screens sizes 1536 and above

- `Designs`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `DesignsXS`: componet for xs breakpoint, screens sizes 0 to 599
    - `DesignsSM`: componet for sm breakpoint, screens sizes 600 to 899
    - `DesignsMD`: componet for md breakpoint, screens sizes 900 to 1199
    - `DesignsLG`: componet for lg breakpoint, screens sizes 1200 to 1535
    - `DesignsXL`: componet for xl breakpoint, screens sizes 1536 and above

- `FullStackProjects`: contains breakpoints/media queries for xs, sm, md, lg, xl
    - `FSPXS`: componet for xs breakpoint, screens sizes 0 to 599
    - `FSPSM`: componet for sm breakpoint, screens sizes 600 to 899
    - `FSPMD`: componet for md breakpoint, screens sizes 900 to 1199
    - `FSPLG`: componet for lg breakpoint, screens sizes 1200 to 1535
    - `FSPXL`: componet for xl breakpoint, screens sizes 1536 and above



## Color Schema
<div class=' color one'>
    <p class='text' >RGB: </p>
    <p class='text' >Hex: #B30AB3 </p>
 </div>
 <div class=' color two'>
    <p class='text' >RGB:    </p>
    <p class='text' >Hex: #50424F </p>
 </div> 

 <div class=' color three'>
    <p class='text' >RGB: </p>
    <p class='text' >Hex: #B7A6B5 </p>
 </div>             
 
 


<style>
    .color {
        font-weight: bolder;
        padding: 1rem;
            width: 200px;
            height: 50px;         
    }

    .text {
        color: black
    }

    .one {
        background-color: #B30AB3;
    }
        
    .two {
        background-color: #50424F;
    }

    .three {
        background-color: #B7A6B5;
    }
</style>
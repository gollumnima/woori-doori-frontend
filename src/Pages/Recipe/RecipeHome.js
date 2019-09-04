import React from "react";
import "./RecipeHome.scss";
import RecipeHomeCategory from "../Recipe/RecipeHomeCategory";
import Navbar from "../../Components/Home/Navbar";
import HomeRecipeItem from "../../Components/Home/HomeRecipeItem";
import Data from "../Home/Data";

let category = [
  {
    title: "국가",
    items: ["한국", "중국", "일본", "이탈리아"]
  },
  {
    title: "재료",
    items: ["돼지고기", "소고기", "샐러드", "닭고기"]
  }
];

const CategoryData = [
  {
    title: [1, "나라별"],
    items: [[1, "한식"], [2, "중식"], [3, "양식"], [4, "일식"]]
  },
  {
    title: [2, "식자재별"],
    items: [[1, "돼지고기"], [2, "닭고기"], [3, "소고기"], [4, "채소"]]
  }
];

class RecipeHome extends React.Component {
  constructor() {
    super();
    this.state = {
      category: [],
      selectedCategory: {},
      recipeList: []
    };
  }

  componentDidMount() {
    // fetch (카타고리를 읽어오기)
    this.state.category = CategoryData;

    for (let index = 0; index < CategoryData.length; index++) {
      this.state.selectedCategory[CategoryData[index].title[1]] = -1;
    }

    this.setState({
      category: this.state.category,
      selectedCategory: this.state.selectedCategory
    });
  }

  onChangeCategory = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.state.selectedCategory[name] = Number(value);
    this.setState({
      selectedCategory: this.state.selectedCategory
    });
  };

  render() {
    let DataA = Data;
    return (
      <>
        <div className="RecipeWrap">
          <Navbar />
          <div className="RecipeHome-tag">
            <div className="RecipeHome">
              <div className="tag_round">
                <div className="tag">
                  {this.state.category.map((el, key) => {
                    return (
                      <RecipeHomeCategory
                        key={key}
                        title={el.title[1]}
                        items={el.items}
                        onChangeCategory={this.onChangeCategory}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="design">
                {/* <BestRecipe baseRecipeList={Data} /> */}

                <HomeRecipeItem
                  id="3"
                  img="https://cdn.pixabay.com/photo/2019/03/13/21/16/cookies-4053771_960_720.jpg"
                  desc="test"
                  name="test"
                />
                <HomeRecipeItem
                  id="3"
                  img="https://cdn.pixabay.com/photo/2019/03/13/21/16/cookies-4053771_960_720.jpg"
                  desc="test"
                  name="test"
                />
                <HomeRecipeItem
                  id="3"
                  img="https://cdn.pixabay.com/photo/2019/03/13/21/16/cookies-4053771_960_720.jpg"
                  desc="test"
                  name="test"
                />
                <HomeRecipeItem
                  id="3"
                  img="https://cdn.pixabay.com/photo/2019/03/13/21/16/cookies-4053771_960_720.jpg"
                  desc="test"
                  name="test"
                />
              </div>
              {/* <div className="title_line">
                  <h1>Best Recipes</h1>
                </div>
                <div className="recipe_tap"> */}
              {/* <BestRecipe baseRecipeList={DataA} /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecipeHome;

// import React from "react";
// import "./RecipeHome.scss";
// import RecipeHomeCategory from "../Recipe/RecipeHomeCategory";
// import Navbar from "../../Components/Home/Navbar";
// import BestRecipe from "../../Components/Home/BestRecipe";
// import Data from "../Home/Data";
// let category = [
//   {
//     title: "국가",
//     items: ["한국", "중국", "일본", "이탈리아"]
//   },
//   {
//     title: "재료",
//     items: ["돼지고기", "소고기", "샐러드", "닭고기"]
//   }
// ];

// class RecipeHome extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   onChangedRadio = () => {
//     this.setState({});
//   };
//   render() {
//     let DataA = Data;
//     return (
//       <>
//         <Navbar />

//         <div className="RecipeHome-tag">
//           <div className="RecipeHome">
//             <div className="tag_round">
//               <div className="tag">
//                 {category.map((el, key) => {
//                   return (
//                     <RecipeHomeCategory
//                       key={key}
//                       title={el.title}
//                       items={el.items}
//                     />
//                   );
//                 })}
//               </div>
//               <div className="btn_wrap">
//                 <button onClick={this.onChangedRadio} className="btn">
//                   확인
//                 </button>
//               </div>
//             </div>
//             <div className="design">
//               <div className="title_line">
//                 <h1>Best Recipes</h1>
//               </div>
//               <div className="recipe_tap">
//                 <BestRecipe baseRecipeList={DataA} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default RecipeHome;

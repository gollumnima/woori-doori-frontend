import React, { Component } from "react";
import "./BestRecipe.scss";

class BestRecipe extends Component {
  render() {
    return (
      <>
        {this.props.baseRecipeList.map(el => {
          return (
            <div className="home_recipe_wrapper">
              <div className="home_recipe_container">
                <div className="home_recipe_img_container">
                  <img src={el.img} alt={el.name}></img>
                  <div className="home_recipe_words_container">
                    <h4 className="home_recipe_category">{el.desc}</h4>
                    <h2 className="home_recipe_name">{el.name}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default BestRecipe;

// import React, { Component } from "react";
// import "./BestRecipe.scss";

// class BestRecipe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       data: []
//     };
//   }
//   componentDidMount() {
//     fetch("./data/Data.json")
//       .then(response => response.json())
//       .then(
//         result => {
//           this.setState({
//             isLoaded: true,
//             data: result.data
//           });
//         },
//         error => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//       .then(result => console.log(result, "결과!!"));
//   }
//   render() {
//     const { error, isLoaded, data } = this.state;
//     if (error) {
//       return <div>Error in loading</div>;
//     } else if (!isLoaded) {
//       return <div>Loading ...</div>;
//     } else {
//       return (
//         <>
//           {data.map(el => (
//             <div className="home_recipe_wrapper">
//               <div className="home_recipe_container">
//                 <div className="home_recipe_img_container">
//                   <img src={el.img} alt={el.name}></img>
//                   <div className="home_recipe_words_container">
//                     <h4 className="home_recipe_category">{el.desc}</h4>
//                     <h2 className="home_recipe_name">{el.name}</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </>
//       );
//     }
//   }
// }

// export default BestRecipe;

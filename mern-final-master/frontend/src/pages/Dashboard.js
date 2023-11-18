import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-dark-subtle dashboard">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            fill="currentColor"
            className="bi bi-yelp"
            viewBox="0 0 16 16"
          >
            <path d="m4.188 10.095.736-.17a.824.824 0 0 0 .073-.02.813.813 0 0 0 .453-1.255 1.025 1.025 0 0 0-.3-.258 2.782 2.782 0 0 0-.428-.198l-.808-.295a76.035 76.035 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.143 2.143 0 0 0-.606-.116.723.723 0 0 0-.572.245 1.625 1.625 0 0 0-.105.132 1.555 1.555 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.785.785 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566.003.001Zm8.219-3.911a4.185 4.185 0 0 0-.8-1.14 1.602 1.602 0 0 0-.275-.21 1.591 1.591 0 0 0-.15-.073.723.723 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575-.34.345-.677.691-1.01 1.042l-.598.62a2.79 2.79 0 0 0-.298.365 1 1 0 0 0-.157.364.813.813 0 0 0 .007.301c0 .005.002.009.003.013a.812.812 0 0 0 .945.616.774.774 0 0 0 .074-.014l3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.787.787 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308ZM6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05c-.185.025-.37.06-.553.104a7.589 7.589 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857.022.01.045.018.068.025.15.057.313.068.469.032l.028-.007a.809.809 0 0 0 .377-.226.732.732 0 0 0 .053-.055Zm-.276 3.161a.737.737 0 0 0-.923-.234.976.976 0 0 0-.145.09 1.909 1.909 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705c-.29.395-.577.791-.861 1.193-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.73.73 0 0 0-.03.314c.013.11.05.217.108.312.031.047.064.093.1.138a1.548 1.548 0 0 0 .257.237 4.482 4.482 0 0 0 2.196.76 1.593 1.593 0 0 0 .349-.027 1.57 1.57 0 0 0 .163-.048.797.797 0 0 0 .278-.178.731.731 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821.025-.49.044-.98.06-1.469l.033-.87a2.09 2.09 0 0 0-.055-.623.93.93 0 0 0-.117-.27Zm5.783 1.362a2.199 2.199 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398-.43-.236-.86-.466-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a1.908 1.908 0 0 0-.466-.166.993.993 0 0 0-.17-.018.738.738 0 0 0-.725.616.946.946 0 0 0 .01.293c.038.204.13.406.224.583l.41.768c.228.434.459.864.696 1.294.152.28.28.52.398.719.023.037.048.077.068.112.145.239.261.39.379.497a.73.73 0 0 0 .596.201 1.55 1.55 0 0 0 .168-.029 1.584 1.584 0 0 0 .325-.129 4.06 4.06 0 0 0 .855-.64c.306-.3.577-.63.788-1.006.03-.053.055-.109.076-.165a1.58 1.58 0 0 0 .051-.161c.013-.056.022-.111.029-.168a.792.792 0 0 0-.038-.327.73.73 0 0 0-.165-.27Z" />
          </svg>
          <span className="fs-4">Recipe Island</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link to="/Dashboard" className="nav-link link-body-emphasis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="dropdown">
              <a
                href="/"
                className="nav-link link-body-emphasis dropdown-toggle"
                role="button"
                id="myRecipesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-journals mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                </svg>
                My Recipes
              </a>
              <ul
                className="dropdown-menu  ms-4 text-small shadow"
                aria-labelledby="myRecipesDropdown"
              >
                <li>
                  <a href="/create-recipe" className="dropdown-item text-dark">
                    Create Recipe
                  </a>
                </li>
                <li>
                  <a href="/saved-recipes" className="dropdown-item text-dark">
                    Saved Recipes
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="/"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>Alex</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="/">
                Log out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="recipe-grid">
        <div className="recipe-card">
          <figure>
            <img
              src="https://www.daringgourmet.com/wp-content/uploads/2023/06/Dosa-Recipe-3.jpg"
              alt="Cover image"
            />
          </figure>

          <div className="card-meta">
            <p className="dish-type">Main Course</p>

            <ul className="dish-stats">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8 4V8.5H11"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                10 mins
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="heart-icon2"
                  onclick="toggleLike2()"
                >
                  <path
                    d="M4.9713 2.5C7.00005 2.5 8.00005 4.5 8.00005 4.5C8.00005 4.5 9.00005 2.5 11.0288 2.5C12.6775 2.5 13.9832 3.87937 14 5.52531C14.0344 8.94187 11.2897 11.3716 8.2813 13.4134C8.19836 13.4699 8.10036 13.5 8.00005 13.5C7.89973 13.5 7.80174 13.4699 7.7188 13.4134C4.71067 11.3716 1.96598 8.94187 2.00005 5.52531C2.01692 3.87937 3.32255 2.5 4.9713 2.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span id="like-count2">35</span>
              </li>
            </ul>
          </div>
          <h1>Masala Dosa</h1>

          <p className="recipe-description">
            A dosa is a thin savory crepe in South Indian cuisine made from a
            fermented batter of ground black lentils and rice. Dosas are served
            hot, often with chutney and .......
            <br />
            <br />
            <a href="/">Read More</a>
          </p>
        </div>

        <div className="recipe-card">
          <figure>
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&resize=440,400"
              alt="Cover image"
            />
          </figure>

          <div className="card-meta">
            <p className="dish-type">Main Course</p>

            <ul className="dish-stats">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8 4V8.5H11"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                45 min
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="heart-icon2"
                  onclick="toggleLike2()"
                >
                  <path
                    d="M4.9713 2.5C7.00005 2.5 8.00005 4.5 8.00005 4.5C8.00005 4.5 9.00005 2.5 11.0288 2.5C12.6775 2.5 13.9832 3.87937 14 5.52531C14.0344 8.94187 11.2897 11.3716 8.2813 13.4134C8.19836 13.4699 8.10036 13.5 8.00005 13.5C7.89973 13.5 7.80174 13.4699 7.7188 13.4134C4.71067 11.3716 1.96598 8.94187 2.00005 5.52531C2.01692 3.87937 3.32255 2.5 4.9713 2.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span id="like-count2">65</span>
              </li>
            </ul>
          </div>

          <h1>Butter Chicken</h1>

          <p className="recipe-description">
            It is a rich and creamy curry made with tender chicken pieces cooked
            in a tomato-based sauce with a generous amount of butter and cream.
            The chicken is.....
            <br />
            <br />
            <a href="/">Read More</a>
          </p>
        </div>
        <div className="recipe-card">
          <figure>
            <img
              src="https://www.iwmbuzz.com/wp-content/uploads/2021/02/bored-of-eating-same-food-try-this-indo-chinese-food-hakka-noodles-simple-and-easy-to-make-920x518.jpeg"
              alt="Cover image"
            />
          </figure>

          <div className="card-meta">
            <p className="dish-type">Main Course</p>

            <ul className="dish-stats">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8 4V8.5H11"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                30 min
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="heart-icon"
                  onclick="toggleLike()"
                >
                  <path
                    d="M4.9713 2.5C7.00005 2.5 8.00005 4.5 8.00005 4.5C8.00005 4.5 9.00005 2.5 11.0288 2.5C12.6775 2.5 13.9832 3.87937 14 5.52531C14.0344 8.94187 11.2897 11.3716 8.2813 13.4134C8.19836 13.4699 8.10036 13.5 8.00005 13.5C7.89973 13.5 7.80174 13.4699 7.7188 13.4134C4.71067 11.3716 1.96598 8.94187 2.00005 5.52531C2.01692 3.87937 3.32255 2.5 4.9713 2.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span id="like-count">21</span>
              </li>
            </ul>
          </div>

          <h1>Indo-Chinese Veg Hakka Noodles</h1>

          <p className="recipe-description">
            This delicious Indo-Chinese Veg Hakka Noodles recipe is quick and
            easy to make. It's the perfect snack for any occasion!
            <br />
            <br />
            <br />
            <a href="/">Read More</a>
          </p>
        </div>

        <div className="recipe-card">
          <figure>
            <img
              src="https://images.slurrp.com/prod/recipe_images/transcribe/ankush/Steamed-Pork-momo.webp"
              alt="Cover image"
            />
          </figure>

          <div className="card-meta">
            <p className="dish-type">Snacks</p>

            <ul className="dish-stats">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8 4V8.5H11"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                50 min
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="heart-icon2"
                  onclick="toggleLike2()"
                >
                  <path
                    d="M4.9713 2.5C7.00005 2.5 8.00005 4.5 8.00005 4.5C8.00005 4.5 9.00005 2.5 11.0288 2.5C12.6775 2.5 13.9832 3.87937 14 5.52531C14.0344 8.94187 11.2897 11.3716 8.2813 13.4134C8.19836 13.4699 8.10036 13.5 8.00005 13.5C7.89973 13.5 7.80174 13.4699 7.7188 13.4134C4.71067 11.3716 1.96598 8.94187 2.00005 5.52531C2.01692 3.87937 3.32255 2.5 4.9713 2.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span id="like-count2">45</span>
              </li>
            </ul>
          </div>

          <h1>Dim Sum</h1>

          <p className="recipe-description">
            Dimsum, a steamed or fried dumpling stuffed with mixed vegetables,
            is a delicious snack food. Enjoy them with spicy red tomato chilli
            chutney.....
            <br />
            <br />
            <a href="/">Read More</a>
          </p>
        </div>

        <div className="recipe-card">
          <figure>
            <img
              src="https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11.jpg"
              alt="Cover image"
            />
          </figure>

          <div className="card-meta">
            <p className="dish-type">Main Course</p>

            <ul className="dish-stats">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8 4V8.5H11"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                75 min
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="heart-icon2"
                  onclick="toggleLike2()"
                >
                  <path
                    d="M4.9713 2.5C7.00005 2.5 8.00005 4.5 8.00005 4.5C8.00005 4.5 9.00005 2.5 11.0288 2.5C12.6775 2.5 13.9832 3.87937 14 5.52531C14.0344 8.94187 11.2897 11.3716 8.2813 13.4134C8.19836 13.4699 8.10036 13.5 8.00005 13.5C7.89973 13.5 7.80174 13.4699 7.7188 13.4134C4.71067 11.3716 1.96598 8.94187 2.00005 5.52531C2.01692 3.87937 3.32255 2.5 4.9713 2.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span id="like-count2">65</span>
              </li>
            </ul>
          </div>

          <h1>Chicken Biryani</h1>

          <p className="recipe-description">
            Chicken Biryani is a savory chicken and rice dish that includes
            layers of chicken, rice, and aromatics that are steamed
            together.....
            <br />
            <br />
            <br />
            <a href="detailed_recipe2.html">Read More</a>
          </p>
        </div>

        <div className="recipe-card">
          <figure>
            <img
              src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Madhuli_Ajay/Makai_Dhokla_Savoury_steamed_Corn_cakes.jpg"
              alt="Cover image"
            />
          </figure>

          <div className="card-meta">
            <p className="dish-type">Snacks</p>

            <ul className="dish-stats">
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2Z"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M8 4V8.5H11"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                30 min
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  id="heart-icon2"
                  onclick="toggleLike2()"
                >
                  <path
                    d="M4.9713 2.5C7.00005 2.5 8.00005 4.5 8.00005 4.5C8.00005 4.5 9.00005 2.5 11.0288 2.5C12.6775 2.5 13.9832 3.87937 14 5.52531C14.0344 8.94187 11.2897 11.3716 8.2813 13.4134C8.19836 13.4699 8.10036 13.5 8.00005 13.5C7.89973 13.5 7.80174 13.4699 7.7188 13.4134C4.71067 11.3716 1.96598 8.94187 2.00005 5.52531C2.01692 3.87937 3.32255 2.5 4.9713 2.5Z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span id="like-count2">40</span>
              </li>
            </ul>
          </div>

          <h1>Dhokla</h1>

          <p className="recipe-description">
            It is a thick fermented gram flour and yogurt batter steamed till it
            is like a soft. Cooled, cut into squares tempered with mustard
            seeds....
            <br />
            <br />
            <br />
            <a href="detailed_recipe2.html">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}

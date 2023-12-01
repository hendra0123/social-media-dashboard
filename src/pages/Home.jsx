import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../Footer.jsx";
import "./Home.css";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Ikon matahari
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Ikon bulan
import { followers } from "../data/followers.json";
import { overviews } from "../data/overviews.json";
import FollowersCard from "../components/FollowersCard.jsx";
import OverviewCard from "../components/OverviewCard.jsx";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themeConfig = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <main
          className={`background_box relative z-10 min-h-screen ${
            theme === "dark"
              ? "background_box_dark bg-[#1D2029]"
              : "background_box_light bg-[#FFFFFF]"
          } transition-colors`}
        >
          <div className="container mx-auto">
            <div className="mx-[2em] py-10 lg:mx-[4em] xl:mx-[10em] ">
              <div className="mb-10 md:flex md:items-center md:justify-between">
                <div>
                  <h1
                    className={`text-2xl font-bold ${
                      theme === "dark" ? "text-[#fff]" : "text-[#000]"
                    } transition-colors lg:text-3xl`}
                  >
                    Social Media Dashboard
                  </h1>
                  <p
                    className={`font-bold ${
                      theme === "dark" ? "text-[#8b97c6]" : "text-[#63687e]"
                    } transition-colors`}
                  >
                    Total Followers: 23,004
                  </p>
                </div>
                <hr
                  className={`my-5 lg:hidden ${
                    theme === "dark" ? "border-[#373A4D]" : "border-[#898C9B]"
                  } transition-colors`}
                />
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`font-bold ${
                      theme === "dark" ? "text-[#fff]" : "text-[#000]"
                    } transition-colors`}
                  >
                    Dark Mode
                  </span>
                  <Switch
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    inputProps={{ "aria-label": "toggle dark mode" }}
                    color="default"
                    icon={
                      <div
                        className={`icon-container ${
                          theme === "dark" ? "icon-light" : ""
                        }`}
                      >
                        <Brightness4Icon
                          fontSize="small"
                          className={`icon-sun ${
                            theme === "dark" ? "icon-light" : ""
                          }`}
                        />
                      </div>
                    } // Ikon matahari
                    checkedIcon={
                      <div
                        className={`icon-container ${
                          theme === "dark" ? "icon-dark" : ""
                        }`}
                      >
                        <Brightness7Icon
                          fontSize="small"
                          className={`icon-moon ${
                            theme === "dark" ? "icon-dark" : ""
                          }`}
                        />
                      </div>
                    } // Ikon bulan
                  />
                </div>
              </div>

              <div className="grid_auto_fit grid gap-5">
                {followers.map((follower, index) => (
                  <FollowersCard
                    key={index}
                    number={index}
                    Theme={theme}
                    {...follower}
                  />
                ))}
              </div>
              <h2
                className={`mb-6 mt-10 text-2xl font-bold ${
                  theme === "dark" ? "text-[#fff]" : "text-[#636677]"
                } transition-colors`}
              >
                Overview - Today
              </h2>

              <div className="grid_auto_fit_overview 2xl:grid_auto_fit_overview_large grid gap-5 ">
                {overviews.map((overview, index) => (
                  <OverviewCard
                    key={index}
                    number={index}
                    Theme={theme}
                    {...overview}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>

      <Footer Theme={theme} />
    </>
  );
};

export default Home;

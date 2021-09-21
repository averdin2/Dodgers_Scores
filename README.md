## Dodgers Scoreboard App

A simple React web application that gives gameday information for Los Angeles Dodgers Games

For more project information check the projects document folder.

Live Link: https://averdin2.github.io/Dodgers_Scores/

### Project Image
<details>
<summary>Here is an image of the working site:</summary>

![image](https://user-images.githubusercontent.com/10714770/134235383-a7277938-f577-4c5b-8d8d-03506a20d8a7.png)
</details>



### Project Notes

Due to the API I was using, I could not find a way to dynamically generate game data links for a specific game so the app does not work as originally intended. I did learn a lot from this project though. I learned a lot about using React and Redux together as well as using the Fetch API to gather data. The project does work correctly if a proper game day API link is provided in the search field. Bellow are a few links to past games that will show the app working as intended.

If a link for an in-progress game is provided, the ‘Refresh Scores’ button will update the scores for that in-progress game. The first link is already inputted when the app is opened.

Here are a few links you can try:

https://gd2.mlb.com/components/game/mlb/year_2020/month_08/day_20/gid_2020_08_20_lanmlb_seamlb_1/linescore.json

https://gd2.mlb.com/components/game/mlb/year_2020/month_08/day_19/gid_2020_08_19_cinmlb_kcamlb_1/linescore.json

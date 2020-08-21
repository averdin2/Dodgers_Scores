# Project Description

## Introduction

The Dodgers Scores project is a web application that allows users to view real time gameday scores for the Los Angeles Dodgers baseball team. There is no other functionality other than to show the user game scores. Therefore, there is only one page for the application (as initially planned) and no menu navigation or other user interaction with the application. Unfortunately, I was not able to dynamically generate game data links for the API effectively making this website useless for most users. However, I purposely designed to fit my personal needs for the project which you can read bellow.

## Purpose

The purpose of this project is to help me learn more about diffrent web technologies such as React, Redux, and SASS. This project is not used for any profit and all code is open source. The data I am using is directly from the MLB stats website: http://gd2.mlb.com.

## Functional Requirements

### Score

#### This project shall provide a score component that will allow users to view a game's score

- The project will show both away and home team's scores.

#### This project shall provide a component that indicates the inning

- The project will indicate if it is the top or bottom of an inning.
- The project will indicate what inning the game is in.
- The project will indicate if the game is over by displaying 'final' instead of the regular inning indication.

#### This project shall provide a component that indicates outs of an inning.

- The project will show how many outs are recorded in the current inning

#### This project shall provide a component that indicates the batter count of an at bat.

- The project will show the number of balls and strikes in the inning.
- Balls and strikes will be indicated by first the number of balls followed by a dash and then the number of strikes (ex. '3-2' indicates a three and two or full count)

#### This project shall provide a component that indicates how many runners are on base in an inning

- The project will indicate if a runner is on a base. See the design documentation for a better understanding on how this is implemented.

# Week5Friday Independent Project

#### Super Galactic Age Calculator. 6/28/2019

#### By **Tae Lee**

## Description
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user’s age based on a planet’s solar years. I will use the Javascript Date object. I will not build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. I will do at least one test for each spec and commit my specs before starting to code.

### Specs
| Spec.                                                   | Input                       | Output                             |
| :------------------------------------------------------ | :-------------------------- | :--------------------------------- |
| class with property with user's year of birth on Earth and life expectancy |          |                                    |
| use input will be user's year of birth on Earth and that year's life expectancy |     |                                    |
| return user's age on Earth                              | 2000                        | 19 is your age on earth            |
| return user's age on Earth with refactoring             | 2000                        | 19 is your age on earth            |
| return user's age on each planet and life expectancy    | 2000, 80                    | 19, 79, 30, 10, 1                  |
|                                                         |                             | 61, 1,  50, 70, 79                 |
| return user's next birthday on earth                    | 2000, 8, 15, 80             | ~ 2001, 8, 15                      |
| return user's next birthday on earth                    | 2000, 8, 15, 80             | ~ 2001, 8, 15 ~                    |
| return user's next birthday on earth  with refactoring  | 2000, 8, 15, 80             | ~ 2001, 8, 15 ~                    |
| dog year on jupiter = ((2073 - year of birth)/11.86)*7  | 2000, 8, 15, 80             | ~ 43                               |
| return user's age in life span of mayfly                | 2000, 8, 15, 80             | ~ 1997280                          |
| polishing user interface result                         |                             |                                    |
| image loading with webpack + image-webpack-loader       |                             |                                    |
| bug fix for leap year issue (2020) in business logic    | 2000, Feb. 2,               | 2020, Feb, 2                       |
|                                                         | 2000, Mar. 2,               | 2020, Mar, 2                       |



## Setup/Installation Requirements

1. To run this program, clone repository from this GitHub.
2. run command at terminal (npm install)
3. run command at terminal (npm run start)
4. recommend Google Chrome for web browser.
5. some version of OSX may raise errors with a missing libpng dependency (brew install libpng)

## Known Bugs
* No known bugs at this time.

## Technologies Used
  * HTML
  * CSS (bootstrap 3.3.7 which is available in https://getbootstrap.com/docs/3.3/)
  * Javascript
  * jQuery-3.4.1 (https://jquery.com/download/)
  * bootstrap .4.3.1
  * babel
  * Karma
  * jasmine
  * eslint
  * webpack 4.19.1
  * html, uglifyjs, clean-webpack plugins
  * image-webpack-loader (https://www.npmjs.com/package/image-webpack-loader)

## Support and contact details

If there are any questions, bugs or concerns, please contact taebumlee@gmail.com

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **Tae Lee**

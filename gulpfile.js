const gulp = require ("gulp");
const babel = require ("gulp-babel");

gulp.task (
  "build-nodeJS",
  () => (
    gulp
      .src ("source/**/*.js")
      .pipe (
        babel ({
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "current node"
              }
            ]
          ]
        })
      )
      .pipe (gulp.dest ("dist/nodeJS"))
  )
);

// For web development - similar to build-nodeJS but with more polyfills
gulp.task (
  "build-cjs",
  () => (
    gulp
      .src ("source/**/*.js")
      .pipe (
        babel ({
          presets: ["@babel/env"]
        })
      )
      .pipe (gulp.dest ("dist/cjs"))
  )
);

gulp.task (
  "build-amd",
  () => (
    gulp
      .src ("source/**/*.js")
      .pipe (
        babel ({
          presets: [
            [
              "@babel/env",
              {
                modules: "amd"
              }
            ]
          ]
        })
      )
      .pipe (gulp.dest ("dist/amd"))
  )
);

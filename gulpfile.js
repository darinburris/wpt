var gulp = require('gulp'),
    webpagetest = require('gulp-webpagetest');

gulp.task('webpagetest',
  webpagetest(
    {
      url: 'http://www.google.com',
      key: 'YOUR_WEBPAGETEST_API_KEY',
      location: 'Dulles:Chrome',
      firstViewOnly: true,
      output: 'output/results.json',
      budget: {
        SpeedIndex: 1000,
        visualComplete: 1000
      },
      callback: function() {
        console.log('WPT test done !');
      }
    }
  )
);
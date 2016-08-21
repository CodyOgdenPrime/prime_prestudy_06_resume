module.exports = function(grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
      sass: { //SASS on main.scss
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                'src/scss/inc/_normalize.scss': 'node_modules/normalize-css/normalize.css',
                'src/compile.css': 'src/scss/style.scss'
              }
          } 
      },
            postcss: {
    options: {
      map: {
          inline: false, // save all sourcemaps as separate files...
      },
 
      processors: [
        require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes 
      ]
    },
    dist: {
      src: 'src/compile.css',
      dest: 'build/style.css'
    }
  },
      uglify: {
        dist: {
          src: ['src/compile.js'],
          dest: 'build/scripts.min.js',
        },
      },
      concat: {
        dist: {
          src: ['src/js/*.js'],
          dest: 'src/compile.js',
        },
      },
      watch: {
        css: {
          files: ['src/**/*.scss'],
          tasks: ['sass','postcss'],
          options: {
            spawn: false,
          },
                },
                js: {
          files: ['src/js/*.js'],
          tasks: ['concat','uglify'],
          options: {
            spawn: false,
          },
                },
            },
    });

    // Create Grunt Tasks
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-postcss');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');

    // Create Grunt commands
      grunt.registerTask('default', ['sass','postcss','concat','uglify']);
      grunt.registerTask( 'css', 'sass','postcss' );
      grunt.registerTask( 'js', 'contact', 'uglify' );
      grunt.registerTask('dev', ['watch']);
};
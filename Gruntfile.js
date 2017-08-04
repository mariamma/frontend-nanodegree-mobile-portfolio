module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            name: 'verysmall',
            width: '10%',
            suffix: '_verysmall',
            quality: 15
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'views/images/',
          dest: 'views/images/dest/'
        }]
      }
    },
  
  cssmin: {
      target: {
            files: [{
                    expand: true,
                    cwd: 'views/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'views/css/dest',
                    ext: '.min.css'
                    }]
            }
  },

 'node-minify': {
    gcc: {
      files: {
        'views/js/main.min.js': ['views/js/*.js']
      }
    }
  }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-node-minify');
  grunt.registerTask('default', ['responsive_images', 'cssmin','node-minify']);
 // grunt.registerTask('default', ['responsive_images']);
};

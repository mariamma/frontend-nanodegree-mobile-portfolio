module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },
          {
            name:'large',
            width:'60%',
            suffix:'_large',
            quality: 40
          } 
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img/',
          dest: 'img/dest/'
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
 // grunt.registerTask('default', ['responsive_images', 'cssmin','node-minify']);
  grunt.registerTask('default', ['responsive_images']);
};

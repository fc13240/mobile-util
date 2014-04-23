module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			dist: {
				src: [  'src/intro.js', 
						'src/util.js', 
						'src/util-android.js', 
						'src/util-alert.js', 
						'src/util-connection.js', 
						'src/util-store.js',
						'src/util-request.js', 
						'src/outro.js'
				],
				dest: 'dist/output.js'
			}
		},
	    min: {
	      build: {
	      	expand: true,
	        src: 'dist/output.js',
	        dest: 'dist/output.min.js'
	      }
	    }
	  });

	grunt.registerTask('default', ['concat','min']);
}
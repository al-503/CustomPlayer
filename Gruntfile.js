module.exports = function (grunt) {
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        apiKey: '7248330eaedc659a3fb3ab4ff9069bc2',
        movies: {
            omdb: 'https://www.omdbapi.com/<%= list %>',
            tmdb: 'https://api.themoviedb.org/3/list<%= list %>?api_key=<%= apiKey %>&language=en-US'
        }
    })
    grunt.registerTask(
        'movies',
        'Cette tache récupère une liste de films',
        function (first, second) {
            const next = this.async()
            const tplUrl = grunt.config.getRaw('movies.tmdb')
            //   const url = grunt.template.process(tplUrl, {
            //     data: { list: 1, apiKey: '7248330eaedc659a3fb3ab4ff9069bc2' }
            //   })
            const apiKey = grunt.config.getRaw('apiKey')
            const url = grunt.template.process(tplUrl, {
                data: { list: 1, apiKey }
            })
            console.log(tplUrl, url)
            next()
        }
    )
}
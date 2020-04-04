// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './**/*.html',
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // require('cssnano')({
        //     preset: 'default',
        // }),
        ...[purgecss]
        // ...process.env.NODE_ENV === 'production'
        //     ? [purgecss]
        //     : []
    ]
}

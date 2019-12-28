'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    render(ctx) {
        let slug = ctx.params.slug
        console.log("get /post/fa/:slug >", slug)
    },

    en_render(ctx) {
        let slug = ctx.params.slug
        console.log("get /post/fa/:slug >", slug)
    }
};

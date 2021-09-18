import { Before } from 'cypress-cucumber-preprocessor/steps'

let smoke = 0

Before({ tags: '@previdencia' }, () => {
    if (smoke++ > 0) {

    }
})

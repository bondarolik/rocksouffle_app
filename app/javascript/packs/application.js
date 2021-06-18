// Docs about webpacker
// https://edgeguides.rubyonrails.org/webpacker.html


import Rails from "@rails/ujs"
import "@hotwired/turbo-rails"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
ActiveStorage.start()

import "controllers"

const images = require.context("../images", true)
const imagePath = name => images(name, true)

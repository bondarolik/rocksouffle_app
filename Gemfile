source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.1'
gem 'rails', '~> 6.1.3', '>= 6.1.3.2'
gem 'pg'
gem 'puma', '~> 5.0'

# Assets
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'hotwire-rails'
gem 'draper'

# Delayed jobs
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# gem 'redis-namespace'
# gem 'connection_pool'
# gem 'sidekiq'

# Account handling and encrypting passwords
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'
# gem 'devise'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'
# gem 'mini_magick'

# Utilities
# gem 'httparty'
# gem 'friendly_id'
# gem 'active_hash'
# gem 'geared_pagination', '>= 1.0.0'
# gem "valid_email2"

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.4', require: false

# Debuging enabled over any ENV
gem 'amazing_print'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'brakeman' # security tests https://github.com/presidentbeef/brakeman
  gem 'rexml', '~> 3.2', '>= 3.2.4'
end

group :development do
  gem 'foreman'
  gem 'pry'
  gem 'pry-rails'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'letter_opener'
  # gem 'meta_request'

  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  # gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

gem 'tzinfo-data', '>= 1.2016.7'  # Don't rely on OSX/Linux timezone data

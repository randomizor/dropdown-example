# README

### Installation

Required software needed to be installed. Instructions below are for mac users who have homebrew installed already.

- Ruby 3.2.2

#### RVM

```
rvm install 3.2.2
rvm use 3.2.2
```

#### Bundler

```
gem install bundler
bundle install
```

#### Database Initialization

```
rake db:migrate
rake db:seed
```

### Running

#### Server

`bin/dev`

### Usage

#### General

A basic create, read, index and destroy UI for a User resource is available at the root path.

#### Lookbook

Preview of view components can be seen at `/lookbook`


### Notes

- As this is just example functionality, there is no validations on data.
- Controllers are very lightweight; normally would utilize service objects for more complicated controller processing

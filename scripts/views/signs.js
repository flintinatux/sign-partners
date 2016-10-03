const append  = require('ramda/src/append')
const compose = require('ramda/src/compose')
const filter  = require('ramda/src/filter')
const I       = require('ramda/src/identity')
const p       = require('puddles')
const pluck   = require('ramda/src/pluck')
const propEq  = require('ramda/src/propEq')
const sortBy  = require('ramda/src/sortBy')
const T       = require('ramda/src/T')
const take    = require('ramda/src/take')
const uniq    = require('ramda/src/uniq')

const Card = require('./card')
const { setCategory, showMore, zoom } = require('../ducks/signs')

const byCategory = name =>
  name === 'all' ? T : propEq('category', name)

const categories = compose(sortBy(I), append('all'), uniq, pluck('category'))

module.exports = state => {
  const { active, cards, category, fullscreen, pages, pageSize } = state,
        total = pages * pageSize

  const select = filter(byCategory(category))

  return p('div.signs', [
    p('nav.categories.row', categories(cards).map(name =>
      p('div.category', {
        class: { active: category === name },
        on: { click: [ setCategory, name ] }
      }, name)
    )),

    p('div.cards.row', take(total, select(cards)).map(Card)),

    total < select(cards).length
      ? p('button.more', { on: { click: showMore } }, 'Show more')
      : '',

    p('div.fullscreen', [
      p('div.image', {
        class: { show: fullscreen },
        on: { click: [ zoom, false ] },
        style: { backgroundImage: `url(${active.image})` }
      })
    ])
  ])
}

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'trail-1',
      title: 'Rainbow Highway',
      author: 'Jan Michael Vincent',
      city: 'San Francisco',
      trailType: 'Estate',
      bedrooms: 15,
      image: 'https://t4.rbxcdn.com/2d9c258ad023fce6b660fd6ba4f98ebc',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      id: 'trail-2',
      title: 'Blizzard Bluff',
      author: 'Mr. Meeseeks',
      city: 'Seattle',
      trailType: 'Condo',
      bedrooms: 1,
      image: 'https://i.ytimg.com/vi/jmq5-_YgMBo/hqdefault.jpg',
      description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'

    }, {
      id: 'trail-3',
      title: 'Downtown Charm',
      author: 'Birdperson',
      city: 'Portland',
      trailType: 'Apartment',
      bedrooms: 3,
      image: 'https://i.ytimg.com/vi/im6B9MMG5AA/maxresdefault.jpg',
      description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'

    }];
  }
});
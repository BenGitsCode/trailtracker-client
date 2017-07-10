import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'trail-1',
      title: 'Rainbow Highway',
      author: 'Jan Michael Vincent',
      city: 'San Francisco',
      trailType: 'Rainbow',
      image: 'https://t4.rbxcdn.com/2d9c258ad023fce6b660fd6ba4f98ebc',
      description: 'Rainbow Road is the final course of the Special Cup featured in all Mario Kart games and is the climactic course of each game it appears.'
    }, {
      id: 'trail-2',
      title: 'Blizzard Bluff',
      author: 'Mr. Meeseeks',
      city: 'Seattle',
      trailType: 'Icy',
      image: 'https://i.ytimg.com/vi/jmq5-_YgMBo/hqdefault.jpg',
      description: 'Blizzard Bluff, in the Boulder Circuit on the Snow Mountain is the ninth race course in Crash Team Racing.'

    }, {
      id: 'trail-3',
      title: 'Crash Cove',
      author: 'Birdperson',
      city: 'Portland',
      trailType: 'Urban',
      image: 'https://i.ytimg.com/vi/im6B9MMG5AA/maxresdefault.jpg',
      description: 'Crash cove is a beach and it\'s where I learned how to powerslide'

    }];
  }
});
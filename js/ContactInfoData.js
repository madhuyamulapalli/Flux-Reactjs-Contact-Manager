var _ = require('underscore');
module.exports = {
  // Load Mock Contact Info Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('contacts', JSON.stringify({
      contacts: [
            {
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com',
              avatar: _.random(1, 15) + '.jpg'
            },
            {
              id: 2,
              name : 'Chris M. Manning',
              tel: '513-307-5859',
              email: 'ChrisMManning@dayrep.com',
              avatar: _.random(1, 15) + '.jpg'
            },
            {
              id: 3,
              name : 'Ricky M. Digiacomo',
              tel: '918-774-0199',
              email: 'RickyMDigiacomo@teleworm.us',
              avatar: _.random(1, 15) + '.jpg'
            },
            {
              id: 4,
              name : 'Michael K. Bayne',
              tel: '702-989-5145',
              email: 'MichaelKBayne@rhyta.com',
              avatar: _.random(1, 15) + '.jpg'
            },
            {
              id: 5,
              name : 'John I. Wilson',
              tel: '318-292-6700',
              email: 'JohnIWilson@dayrep.com',
              avatar: _.random(1, 15) + '.jpg'
            },
            {
              id: 6,
              name : 'Rodolfo P. Robinett',
              tel: '803-557-9815',
              email: 'RodolfoPRobinett@jourrapide.com',
              avatar: _.random(1, 15) + '.jpg'
            }
          ]
    }));
  }

};
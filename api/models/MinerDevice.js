/**
* MinerDevice.js
*
* The make/model of the device, e.g. Antminer S3. These typically will be loaded as
* fixtures since there is little practical need for users to define custom
* devices.
*/

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,

  enableOwnership: false,

  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    manufacturer: {
      type: 'string'
    },
    hashRate: {
      type: 'integer'
    },
    algorithm: {
      type: 'string',
      enum: [
        'sha256',
        'scrypt'
      ]
    },
    website: {
      type: 'string'
    },
    miners: {
      collection: 'Miner',
      via: 'device'
    }
  }
};


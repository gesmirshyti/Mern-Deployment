const mongoose = require("mongoose");
const PirateSchema = new mongoose.Schema(
  {
    name: { type: String,unique: [true ,"Name is already in use."] ,required:[true, "Name is required"] },
    imageUrl: { type: String, required:[true, "ImageUrl is required"] },
    treasureChests: { type: Number , required:[true, "Number of Treasure is required"]},
    position: {
        type: String,
        enum: ['Captain', 'First Mate', 'Quarter Master', 'Boatswain', 'Powder Monkey'],
        default: 'First Mate',
        required:[true, "Crew Position is required"],
        validate: {
          validator: async function () {
            const existingCaptain = await this.constructor.findOne({ position: 'Captain' });
            return !existingCaptain || this.position === 'First Mate' || this.position === 'Quarter Master' || this.position === 'Boatswain' || this.position === 'Powder Monkey';
          },
          message: 'There can be only 1 Captain.',
        },
      },
    catchPhases: { type: String ,required:[true, "Catch Phases are required"] },
    pegLeg: {type:Boolean },
    eyePatch: {type:Boolean },
    hookHand: {type:Boolean },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Pirate", PirateSchema);

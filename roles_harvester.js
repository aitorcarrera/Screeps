/**
 * These are simple creatures, they just find an active source and harvest it
 * @param creep
 */
var harvester = {
	parts: [
		[MOVE, MOVE, CARRY, WORK]
	],

	action: function () {
		var creep = this.creep;

		if(creep.energy < creep.energyCapacity) {
			var sources = creep.pos.findClosestByPath(FIND_SOURCES);
			creep.moveTo(sources);
			creep.harvest(sources);
		}
		else {
			var target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);

			creep.moveTo(target);
			creep.transferEnergy(target);
		}
	}
};

module.exports = harvester;

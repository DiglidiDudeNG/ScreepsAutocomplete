
/** CREEP BODY PARTS **/

/**
 * @constant
 * @type {string}
 * @default "move"
 */
const MOVE = "move";

/**
 * @constant
 * @type {string}
 * @default "work"
 */
const WORK = "work";

/**
 * @constant
 * @type {string}
 * @default "carry"
 */
const CARRY = "carry";

/**
 * @constant
 * @type {string}
 * @default "attack"
 */
const ATTACK = "attack";

/**
 * @constant
 * @type {string}
 * @default "ranged_attack"
 */
const RANGED_ATTACK = "ranged_attack";

/**
 * @constant
 * @type {string}
 * @default "heal"
 */
const HEAL = "heal";

/**
 * @constant
 * @type {string}
 * @default "tough"
 */
const TOUGH = "tough";

/** DIRECTION CONSTANTS **/

/**
 * @constant
 * @type {number}
 * @default 1
 */
const TOP = 1;

/**
 * @constant
 * @type {number}
 * @default 2
 */
const TOP_RIGHT = 2;

/**
 * @constant
 * @type {number}
 * @default 3
 */
const RIGHT = 3;

/**
 * @constant
 * @type {number}
 * @default 4
 */
const BOTTOM_RIGHT = 4;

/**
 * @constant
 * @type {number}
 * @default 5
 */
const BOTTOM = 5;

/**
 * @constant
 * @type {number}
 * @default 6
 */
const BOTTOM_LEFT = 6;

/**
 * @constant
 * @type {number}
 * @default 7
 */
const LEFT = 7;

/**
 * @constant
 * @type {number}
 * @default 8
 */
const TOP_LEFT = 8;

/** ERROR CONSTANTS **/

/**
 * @constant
 * @type {number}
 * @default 0
 */
const OK = 0;

/**
 * @constant
 * @type {number}
 * @default -1
 */
const ERR_NOT_OWNER = -1;

/**
 * @constant
 * @type {number}
 * @default -2
 */
const ERR_NO_PATH = -2;

/**
 * @constant
 * @type {number}
 * @default -3
 */
const ERR_NAME_EXISTS = -3;

/**
 * @constant
 * @type {number}
 * @default -4
 */
const ERR_BUSY = -4;

/**
 * @constant
 * @type {number}
 * @default -5
 */
const ERR_NOT_FOUND = -5;

/**
 * @constant
 * @type {number}
 * @default -6
 */
const ERR_NOT_ENOUGH_ENERGY = -6;

/**
 * @constant
 * @type {number}
 * @default -6
 */
const ERR_NOT_ENOUGH_RESOURCES = -6;

/**
 * @constant
 * @type {number}
 * @default -6
 */
const ERR_NOT_ENOUGH_EXTENSIONS = -6;

/**
 * @constant
 * @type {number}
 * @default -7
 */
const ERR_INVALID_TARGET = -7;

/**
 * @constant
 * @type {number}
 * @default -8
 */
const ERR_FULL = -8;

/**
 * @constant
 * @type {number}
 * @default -9
 */
const ERR_NOT_IN_RANGE = -9;

/**
 * @constant
 * @type {number}
 * @default -10
 */
const ERR_INVALID_ARGS = -10;

/**
 * @constant
 * @type {number}
 * @default -11
 */
const ERR_TIRED = -11;

/**
 * @constant
 * @type {number}
 * @default -12
 */
const ERR_NO_BODYPART = -12;

/**
 * @constant
 * @type {number}
 * @default -14
 */
const ERR_RCL_NOT_ENOUGH = -14;

/**
 * @constant
 * @type {number}
 * @default -16
 */
const ERR_GCL_NOT_ENOUGH = -16;

/** COLOR CONSTANTS **/

/**
 * @constant
 * @type {string}
 * @default "white"
 */
const COLOR_WHITE = "white";

/**
 * @constant
 * @type {string}
 * @default "grey"
 */
const COLOR_GREY = "grey";

/**
 * @constant
 * @type {string}
 * @default "red"
 */
const COLOR_RED = "red";

/**
 * @constant
 * @type {string}
 * @default "purple"
 */
const COLOR_PURPLE = "purple";

/**
 * @constant
 * @type {string}
 * @default "blue"
 */
const COLOR_BLUE = "blue";

/**
 * @constant
 * @type {string}
 * @default "cyan"
 */
const COLOR_CYAN = "cyan";

/**
 * @constant
 * @type {string}
 * @default "green"
 */
const COLOR_GREEN = "green";

/**
 * @constant
 * @type {string}
 * @default "yellow"
 */
const COLOR_YELLOW = "yellow";

/**
 * @constant
 * @type {string}
 * @default "orange"
 */
const COLOR_ORANGE = "orange";

/**
 * @constant
 * @type {string}
 * @default "brown"
 */
const COLOR_BROWN = "brown";

/** FIND CONSTANTS **/

/**
 * @constant
 * @type {number}
 * @default 1
 */
const FIND_EXIT_TOP = 1;

/**
 * @constant
 * @type {number}
 * @default 3
 */
const FIND_EXIT_RIGHT = 3;

/**
 * @constant
 * @type {number}
 * @default 5
 */
const FIND_EXIT_BOTTOM = 5;

/**
 * @constant
 * @type {number}
 * @default 7
 */
const FIND_EXIT_LEFT = 7;

/**
 * @constant
 * @type {number}
 * @default 10
 */
const FIND_EXIT = 10;

/**
 * @constant
 * @type {number}
 * @default 101
 */
const FIND_CREEPS = 101;

/**
 * @constant
 * @type {number}
 * @default 102
 */
const FIND_MY_CREEPS = 102;

/**
 * @constant
 * @type {number}
 * @default 103
 */
const FIND_HOSTILE_CREEPS = 103;

/**
 * @constant
 * @type {number}
 * @default 104
 */
const FIND_SOURCES_ACTIVE = 104;

/**
 * @constant
 * @type {number}
 * @default 105
 */
const FIND_SOURCES = 105;

/**
 * @constant
 * @type {number}
 * @default 106
 */
const FIND_DROPPED_RESOURCES = 106;

/**
 * @constant
 * @type {number}
 * @default 107
 */
const FIND_STRUCTURES = 107;

/**
 * @constant
 * @type {number}
 * @default 108
 */
const FIND_MY_STRUCTURES = 108;

/**
 * @constant
 * @type {number}
 * @default 109
 */
const FIND_HOSTILE_STRUCTURES = 109;

/**
 * @constant
 * @type {number}
 * @default 110
 */
const FIND_FLAGS = 110;

/**
 * @constant
 * @type {number}
 * @default 111
 */
const FIND_CONSTRUCTION_SITES = 111;

/**
 * @constant
 * @type {number}
 * @default 112
 */
const FIND_MY_SPAWNS = 112;

/**
 * @constant
 * @type {number}
 * @default 113
 */
const FIND_HOSTILE_SPAWNS = 113;

/**
 * @constant
 * @type {number}
 * @default 114
 */
const FIND_MY_CONSTRUCTION_SITES = 114;

/** GAME MODE CONSTANTS **/

/**
 * @constant
 * @type {string}
 * @default "simulation"
 */
const MODE_SIMULATION = "simulation";

/**
 * @constant
 * @type {string}
 * @default "survival"
 */
const MODE_SURVIVAL = "survival";

/**
 * @constant
 * @type {string}
 * @default "world"
 */
const MODE_WORLD = "world";

/**
 * @constant
 * @type {string}
 * @default "arena"
 */
const MODE_ARENA = "arena";

/** STRUCTURE CONSTANTS **/

/**
 * @constant
 * @type {string}
 * @default "extension"
 */
const STRUCTURE_EXTENSION = "extension";

/**
 * @constant
 * @type {string}
 * @default "rampart"
 */
const STRUCTURE_RAMPART = "rampart";

/**
 * @constant
 * @type {string}
 * @default "road"
 */
const STRUCTURE_ROAD = "road";

/**
 * @constant
 * @type {string}
 * @default "spawn"
 */
const STRUCTURE_SPAWN = "spawn";

/**
 * @constant
 * @type {string}
 * @default "constructedWall"
 */
const STRUCTURE_WALL = "constructedWall";

/**
 * @constant
 * @type {string}
 * @default "link"
 */
const STRUCTURE_LINK = "link";

/**
 * @constant
 * @type {string}
 * @default "keeperLair"
 */
const STRUCTURE_KEEPER_LAIR = "keeperLair";

/**
 * @constant
 * @type {string}
 * @default "controller"
 */
const STRUCTURE_CONTROLLER = "controller";

/**
 * @constant
 * @type {string}
 * @default "storage"
 */
const STRUCTURE_STORAGE = "storage";

/**
 * @constant
 * @type {string}
 * @default "tower"
 */
const STRUCTURE_TOWER = "tower";

/**
 * @constant
 * @type {string}
 * @default "observer"
 */
const STRUCTURE_OBSERVER = "observer";

/**
 * @constant
 * @type {string}
 * @default "powerBank"
 */
const STRUCTURE_POWER_BANK = "powerBank";

/**
 * @constant
 * @type {string}
 * @default "powerSpawn"
 */
const STRUCTURE_POWER_SPAWN = "powerSpawn";

/**
 * @constant
 * @type {string}
 * @default "portal"
 */
const STRUCTURE_PORTAL = "portal";

/** RESOURCE CONSTANTS **/

/**
 * @constant
 * @type {string}
 * @default "energy"
 */
const RESOURCE_ENERGY = "energy";

/**
 * @constant
 * @type {string}
 * @default "power"
 */
const RESOURCE_POWER = "power";
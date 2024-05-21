const { kafka } = require('./client')

async function init() {
    const admin = kafka.admin();
    console.log("Connecting Admin ....");
    await admin.connect();
    console.log("Admin Connected");

    console.log('Creating Topic [rider-update]');
    
    await admin.createTopics({
        topics: [{
            topic: 'rider-update',
            numPartitions: 2
        }]
    });

    console.log("Topics created Sucessfully");

    console.log("Disconnecting");

    await admin.disconnect();
}

init();
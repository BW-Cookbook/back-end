
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('instructions').del()
      .then(function () {
        // Inserts seed entries
        return knex('instructions').insert([{"id":1,"recipe_id":40,"name":"ultrices enim lorem ipsum dolor sit"},
        {"id":2,"recipe_id":68,"name":"maecenas leo odio condimentum id luctus nec molestie sed justo"},
        {"id":3,"recipe_id":35,"name":"sit amet consectetuer adipiscing elit proin risus praesent"},
        {"id":4,"recipe_id":73,"name":"erat fermentum justo nec condimentum neque sapien"},
        {"id":5,"recipe_id":14,"name":"justo maecenas rhoncus aliquam lacus morbi quis tortor"},
        {"id":6,"recipe_id":61,"name":"rhoncus sed vestibulum sit amet cursus id"},
        {"id":7,"recipe_id":80,"name":"augue vestibulum rutrum rutrum neque aenean auctor gravida sem"},
        {"id":8,"recipe_id":67,"name":"interdum in ante vestibulum ante ipsum"},
        {"id":9,"recipe_id":25,"name":"pede ullamcorper augue a suscipit nulla elit"},
        {"id":10,"recipe_id":16,"name":"lorem id ligula suspendisse ornare"},
        {"id":11,"recipe_id":39,"name":"ultrices libero non mattis pulvinar"},
        {"id":12,"recipe_id":60,"name":"erat quisque erat eros viverra eget congue eget"},
        {"id":13,"recipe_id":69,"name":"vel nisl duis ac nibh"},
        {"id":14,"recipe_id":23,"name":"blandit lacinia erat vestibulum sed magna at nunc commodo"},
        {"id":15,"recipe_id":3,"name":"eu felis fusce posuere felis sed lacus"},
        {"id":16,"recipe_id":66,"name":"morbi vestibulum velit id pretium iaculis diam erat"},
        {"id":17,"recipe_id":78,"name":"quis orci nullam molestie nibh in lectus pellentesque at nulla"},
        {"id":18,"recipe_id":3,"name":"condimentum neque sapien placerat ante nulla justo aliquam"},
        {"id":19,"recipe_id":1,"name":"sed interdum venenatis turpis enim blandit mi in"},
        {"id":20,"recipe_id":78,"name":"felis eu sapien cursus vestibulum proin"},
        {"id":21,"recipe_id":31,"name":"volutpat erat quisque erat eros viverra eget congue"},
        {"id":22,"recipe_id":45,"name":"pretium iaculis diam erat fermentum"},
        {"id":23,"recipe_id":78,"name":"diam in magna bibendum imperdiet nullam orci"},
        {"id":24,"recipe_id":4,"name":"bibendum morbi non quam nec dui luctus rutrum"},
        {"id":25,"recipe_id":27,"name":"posuere cubilia curae mauris viverra diam vitae"},
        {"id":26,"recipe_id":40,"name":"luctus ultricies eu nibh quisque id justo sit amet sapien"},
        {"id":27,"recipe_id":55,"name":"felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet"},
        {"id":28,"recipe_id":29,"name":"amet eros suspendisse accumsan tortor quis turpis"},
        {"id":29,"recipe_id":43,"name":"nibh in hac habitasse platea dictumst aliquam augue"},
        {"id":30,"recipe_id":53,"name":"tincidunt eget tempus vel pede morbi porttitor"},
        {"id":31,"recipe_id":77,"name":"augue quam sollicitudin vitae consectetuer eget"},
        {"id":32,"recipe_id":55,"name":"sem mauris laoreet ut rhoncus"},
        {"id":33,"recipe_id":80,"name":"ut at dolor quis odio consequat"},
        {"id":34,"recipe_id":55,"name":"potenti cras in purus eu magna vulputate luctus"},
        {"id":35,"recipe_id":72,"name":"lorem ipsum dolor sit amet"},
        {"id":36,"recipe_id":53,"name":"natoque penatibus et magnis dis parturient montes nascetur ridiculus"},
        {"id":37,"recipe_id":39,"name":"vel ipsum praesent blandit lacinia erat vestibulum sed magna at"},
        {"id":38,"recipe_id":42,"name":"lorem vitae mattis nibh ligula nec sem duis aliquam convallis"},
        {"id":39,"recipe_id":58,"name":"dapibus augue vel accumsan tellus nisi"},
        {"id":40,"recipe_id":77,"name":"nec sem duis aliquam convallis nunc proin"},
        {"id":41,"recipe_id":69,"name":"penatibus et magnis dis parturient montes nascetur ridiculus"},
        {"id":42,"recipe_id":17,"name":"at ipsum ac tellus semper interdum mauris ullamcorper purus sit"},
        {"id":43,"recipe_id":51,"name":"morbi vestibulum velit id pretium iaculis"},
        {"id":44,"recipe_id":9,"name":"ut nulla sed accumsan felis"},
        {"id":45,"recipe_id":5,"name":"risus auctor sed tristique in tempus"},
        {"id":46,"recipe_id":61,"name":"amet consectetuer adipiscing elit proin"},
        {"id":47,"recipe_id":13,"name":"vel nulla eget eros elementum pellentesque quisque porta"},
        {"id":48,"recipe_id":49,"name":"mattis egestas metus aenean fermentum donec ut mauris eget"},
        {"id":49,"recipe_id":17,"name":"mauris vulputate elementum nullam varius nulla"},
        {"id":50,"recipe_id":24,"name":"varius nulla facilisi cras non velit nec nisi vulputate nonummy"},
        {"id":51,"recipe_id":24,"name":"nullam molestie nibh in lectus pellentesque at nulla suspendisse"},
        {"id":52,"recipe_id":31,"name":"justo nec condimentum neque sapien placerat ante nulla justo"},
        {"id":53,"recipe_id":11,"name":"est quam pharetra magna ac consequat"},
        {"id":54,"recipe_id":58,"name":"adipiscing elit proin risus praesent lectus vestibulum"},
        {"id":55,"recipe_id":39,"name":"accumsan felis ut at dolor quis odio consequat varius integer"},
        {"id":56,"recipe_id":46,"name":"nisl aenean lectus pellentesque eget nunc donec quis"},
        {"id":57,"recipe_id":42,"name":"turpis nec euismod scelerisque quam turpis"},
        {"id":58,"recipe_id":44,"name":"lobortis sapien sapien non mi integer ac neque duis"},
        {"id":59,"recipe_id":62,"name":"non lectus aliquam sit amet diam in magna bibendum imperdiet"},
        {"id":60,"recipe_id":9,"name":"dolor quis odio consequat varius integer ac leo pellentesque ultrices"},
        {"id":61,"recipe_id":12,"name":"enim sit amet nunc viverra dapibus nulla suscipit ligula"},
        {"id":62,"recipe_id":7,"name":"mi in porttitor pede justo eu"},
        {"id":63,"recipe_id":53,"name":"venenatis non sodales sed tincidunt eu felis fusce posuere felis"},
        {"id":64,"recipe_id":35,"name":"amet consectetuer adipiscing elit proin interdum mauris non ligula"},
        {"id":65,"recipe_id":49,"name":"lacus at velit vivamus vel"},
        {"id":66,"recipe_id":19,"name":"pede morbi porttitor lorem id ligula"},
        {"id":67,"recipe_id":51,"name":"habitasse platea dictumst etiam faucibus cursus"},
        {"id":68,"recipe_id":32,"name":"platea dictumst etiam faucibus cursus urna ut tellus nulla"},
        {"id":69,"recipe_id":69,"name":"nam congue risus semper porta volutpat"},
        {"id":70,"recipe_id":49,"name":"bibendum felis sed interdum venenatis"},
        {"id":71,"recipe_id":12,"name":"turpis donec posuere metus vitae ipsum aliquam non mauris"},
        {"id":72,"recipe_id":75,"name":"felis fusce posuere felis sed lacus"},
        {"id":73,"recipe_id":25,"name":"at nibh in hac habitasse"},
        {"id":74,"recipe_id":58,"name":"faucibus cursus urna ut tellus nulla ut"},
        {"id":75,"recipe_id":36,"name":"congue etiam justo etiam pretium iaculis justo"},
        {"id":76,"recipe_id":47,"name":"nec condimentum neque sapien placerat ante nulla justo"},
        {"id":77,"recipe_id":45,"name":"eget eleifend luctus ultricies eu nibh quisque"},
        {"id":78,"recipe_id":77,"name":"sit amet nunc viverra dapibus nulla"},
        {"id":79,"recipe_id":80,"name":"leo maecenas pulvinar lobortis est"},
        {"id":80,"recipe_id":71,"name":"consequat morbi a ipsum integer a nibh in quis justo"},
        {"id":81,"recipe_id":26,"name":"vestibulum aliquet ultrices erat tortor"},
        {"id":82,"recipe_id":41,"name":"eget massa tempor convallis nulla neque libero convallis eget"},
        {"id":83,"recipe_id":32,"name":"lorem integer tincidunt ante vel"},
        {"id":84,"recipe_id":60,"name":"congue eget semper rutrum nulla"},
        {"id":85,"recipe_id":27,"name":"ultrices aliquet maecenas leo odio condimentum id"},
        {"id":86,"recipe_id":56,"name":"congue diam id ornare imperdiet sapien urna pretium"},
        {"id":87,"recipe_id":6,"name":"id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum"},
        {"id":88,"recipe_id":52,"name":"pede venenatis non sodales sed tincidunt eu felis fusce posuere"},
        {"id":89,"recipe_id":60,"name":"ut at dolor quis odio consequat varius integer ac leo"},
        {"id":90,"recipe_id":25,"name":"vitae quam suspendisse potenti nullam porttitor lacus"},
        {"id":91,"recipe_id":6,"name":"orci mauris lacinia sapien quis libero nullam sit"},
        {"id":92,"recipe_id":18,"name":"sociis natoque penatibus et magnis dis parturient montes"},
        {"id":93,"recipe_id":48,"name":"maecenas ut massa quis augue luctus"},
        {"id":94,"recipe_id":71,"name":"lacinia nisi venenatis tristique fusce congue"},
        {"id":95,"recipe_id":21,"name":"sed nisl nunc rhoncus dui"},
        {"id":96,"recipe_id":40,"name":"sapien cursus vestibulum proin eu mi nulla ac enim in"},
        {"id":97,"recipe_id":61,"name":"faucibus orci luctus et ultrices posuere cubilia curae duis faucibus"},
        {"id":98,"recipe_id":30,"name":"ultrices enim lorem ipsum dolor sit amet consectetuer"},
        {"id":99,"recipe_id":2,"name":"curabitur convallis duis consequat dui nec nisi volutpat eleifend"},
        {"id":100,"recipe_id":37,"name":"luctus nec molestie sed justo pellentesque viverra pede ac"},
        {"id":101,"recipe_id":26,"name":"ultricies eu nibh quisque id"},
        {"id":102,"recipe_id":33,"name":"enim sit amet nunc viverra"},
        {"id":103,"recipe_id":4,"name":"aliquet maecenas leo odio condimentum id luctus nec molestie sed"},
        {"id":104,"recipe_id":27,"name":"odio consequat varius integer ac"},
        {"id":105,"recipe_id":20,"name":"in porttitor pede justo eu massa donec dapibus"},
        {"id":106,"recipe_id":24,"name":"vivamus vel nulla eget eros elementum pellentesque quisque"},
        {"id":107,"recipe_id":15,"name":"curae nulla dapibus dolor vel est"},
        {"id":108,"recipe_id":70,"name":"vestibulum quam sapien varius ut blandit non interdum"},
        {"id":109,"recipe_id":15,"name":"vestibulum proin eu mi nulla ac enim in"},
        {"id":110,"recipe_id":4,"name":"in ante vestibulum ante ipsum primis in faucibus"},
        {"id":111,"recipe_id":33,"name":"maecenas leo odio condimentum id luctus nec molestie"},
        {"id":112,"recipe_id":51,"name":"proin at turpis a pede posuere nonummy"},
        {"id":113,"recipe_id":40,"name":"orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"},
        {"id":114,"recipe_id":80,"name":"eget nunc donec quis orci eget"},
        {"id":115,"recipe_id":34,"name":"justo aliquam quis turpis eget"},
        {"id":116,"recipe_id":53,"name":"habitasse platea dictumst aliquam augue quam sollicitudin"},
        {"id":117,"recipe_id":17,"name":"id nulla ultrices aliquet maecenas leo odio condimentum id"},
        {"id":118,"recipe_id":50,"name":"quis odio consequat varius integer ac leo pellentesque"},
        {"id":119,"recipe_id":11,"name":"faucibus orci luctus et ultrices posuere cubilia curae donec pharetra"},
        {"id":120,"recipe_id":14,"name":"viverra eget congue eget semper"},
        {"id":121,"recipe_id":7,"name":"porta volutpat quam pede lobortis ligula sit amet"},
        {"id":122,"recipe_id":19,"name":"vitae nisl aenean lectus pellentesque"},
        {"id":123,"recipe_id":52,"name":"porta volutpat quam pede lobortis"},
        {"id":124,"recipe_id":45,"name":"morbi vel lectus in quam fringilla rhoncus mauris enim"},
        {"id":125,"recipe_id":40,"name":"tincidunt lacus at velit vivamus"},
        {"id":126,"recipe_id":16,"name":"montes nascetur ridiculus mus etiam vel"},
        {"id":127,"recipe_id":34,"name":"sapien cum sociis natoque penatibus et magnis dis parturient"},
        {"id":128,"recipe_id":38,"name":"rhoncus mauris enim leo rhoncus sed vestibulum sit amet"},
        {"id":129,"recipe_id":67,"name":"ante nulla justo aliquam quis turpis eget elit"},
        {"id":130,"recipe_id":17,"name":"neque aenean auctor gravida sem praesent id massa"},
        {"id":131,"recipe_id":35,"name":"pharetra magna vestibulum aliquet ultrices erat tortor"},
        {"id":132,"recipe_id":71,"name":"donec odio justo sollicitudin ut suscipit a"},
        {"id":133,"recipe_id":70,"name":"sapien sapien non mi integer"},
        {"id":134,"recipe_id":2,"name":"venenatis lacinia aenean sit amet justo morbi ut odio cras"},
        {"id":135,"recipe_id":59,"name":"erat volutpat in congue etiam justo"},
        {"id":136,"recipe_id":18,"name":"neque libero convallis eget eleifend luctus ultricies eu"},
        {"id":137,"recipe_id":29,"name":"molestie lorem quisque ut erat curabitur gravida nisi at"},
        {"id":138,"recipe_id":52,"name":"sed justo pellentesque viverra pede ac"},
        {"id":139,"recipe_id":53,"name":"justo nec condimentum neque sapien"},
        {"id":140,"recipe_id":18,"name":"vel nisl duis ac nibh fusce lacus purus aliquet"},
        {"id":141,"recipe_id":79,"name":"semper sapien a libero nam dui proin"},
        {"id":142,"recipe_id":55,"name":"morbi vel lectus in quam fringilla rhoncus"},
        {"id":143,"recipe_id":6,"name":"at nulla suspendisse potenti cras in purus eu magna vulputate"},
        {"id":144,"recipe_id":75,"name":"rhoncus aliquet pulvinar sed nisl nunc"},
        {"id":145,"recipe_id":49,"name":"venenatis non sodales sed tincidunt eu felis"},
        {"id":146,"recipe_id":13,"name":"erat curabitur gravida nisi at nibh in hac habitasse"},
        {"id":147,"recipe_id":49,"name":"accumsan felis ut at dolor quis odio"},
        {"id":148,"recipe_id":4,"name":"adipiscing elit proin risus praesent lectus vestibulum quam"},
        {"id":149,"recipe_id":26,"name":"turpis eget elit sodales scelerisque mauris sit amet eros suspendisse"},
        {"id":150,"recipe_id":73,"name":"in consequat ut nulla sed accumsan felis ut at"},
        {"id":151,"recipe_id":32,"name":"id nisl venenatis lacinia aenean sit"},
        {"id":152,"recipe_id":54,"name":"nullam porttitor lacus at turpis donec posuere"},
        {"id":153,"recipe_id":49,"name":"scelerisque quam turpis adipiscing lorem vitae"},
        {"id":154,"recipe_id":43,"name":"amet eleifend pede libero quis"},
        {"id":155,"recipe_id":56,"name":"adipiscing elit proin risus praesent"},
        {"id":156,"recipe_id":61,"name":"semper porta volutpat quam pede"},
        {"id":157,"recipe_id":22,"name":"pede morbi porttitor lorem id ligula suspendisse"},
        {"id":158,"recipe_id":29,"name":"porttitor pede justo eu massa"},
        {"id":159,"recipe_id":62,"name":"sapien iaculis congue vivamus metus"},
        {"id":160,"recipe_id":28,"name":"mi sit amet lobortis sapien sapien non mi integer"},
        {"id":161,"recipe_id":66,"name":"donec dapibus duis at velit eu est"},
        {"id":162,"recipe_id":43,"name":"eros suspendisse accumsan tortor quis turpis sed ante"},
        {"id":163,"recipe_id":44,"name":"primis in faucibus orci luctus et ultrices posuere"},
        {"id":164,"recipe_id":31,"name":"congue vivamus metus arcu adipiscing molestie hendrerit at vulputate"},
        {"id":165,"recipe_id":36,"name":"sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in"},
        {"id":166,"recipe_id":32,"name":"nibh in hac habitasse platea dictumst aliquam augue"},
        {"id":167,"recipe_id":63,"name":"metus arcu adipiscing molestie hendrerit at vulputate vitae nisl"},
        {"id":168,"recipe_id":17,"name":"habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla"},
        {"id":169,"recipe_id":12,"name":"nisi volutpat eleifend donec ut dolor morbi vel lectus"},
        {"id":170,"recipe_id":33,"name":"eros elementum pellentesque quisque porta volutpat erat"},
        {"id":171,"recipe_id":16,"name":"luctus tincidunt nulla mollis molestie"},
        {"id":172,"recipe_id":22,"name":"mauris eget massa tempor convallis nulla neque libero convallis eget"},
        {"id":173,"recipe_id":69,"name":"varius nulla facilisi cras non"},
        {"id":174,"recipe_id":32,"name":"nam congue risus semper porta volutpat quam pede lobortis ligula"},
        {"id":175,"recipe_id":20,"name":"dolor sit amet consectetuer adipiscing elit proin"},
        {"id":176,"recipe_id":27,"name":"lacus morbi sem mauris laoreet ut rhoncus"},
        {"id":177,"recipe_id":49,"name":"fusce consequat nulla nisl nunc nisl"},
        {"id":178,"recipe_id":13,"name":"vehicula consequat morbi a ipsum integer a nibh in"},
        {"id":179,"recipe_id":16,"name":"pede libero quis orci nullam"},
        {"id":180,"recipe_id":25,"name":"quisque porta volutpat erat quisque erat eros viverra eget"},
        {"id":181,"recipe_id":38,"name":"aliquam quis turpis eget elit sodales scelerisque"},
        {"id":182,"recipe_id":1,"name":"mi integer ac neque duis"},
        {"id":183,"recipe_id":67,"name":"vestibulum sit amet cursus id turpis integer"},
        {"id":184,"recipe_id":70,"name":"felis sed interdum venenatis turpis enim blandit mi in porttitor"},
        {"id":185,"recipe_id":67,"name":"pellentesque ultrices mattis odio donec vitae"},
        {"id":186,"recipe_id":3,"name":"ut ultrices vel augue vestibulum ante ipsum primis in"},
        {"id":187,"recipe_id":50,"name":"eu felis fusce posuere felis"},
        {"id":188,"recipe_id":17,"name":"nec nisi volutpat eleifend donec ut dolor morbi vel lectus"},
        {"id":189,"recipe_id":17,"name":"faucibus orci luctus et ultrices posuere"},
        {"id":190,"recipe_id":47,"name":"quam sollicitudin vitae consectetuer eget rutrum at"},
        {"id":191,"recipe_id":74,"name":"duis mattis egestas metus aenean fermentum donec ut"},
        {"id":192,"recipe_id":35,"name":"quis justo maecenas rhoncus aliquam lacus"},
        {"id":193,"recipe_id":22,"name":"quis turpis sed ante vivamus"},
        {"id":194,"recipe_id":34,"name":"posuere metus vitae ipsum aliquam non mauris morbi non lectus"},
        {"id":195,"recipe_id":78,"name":"odio curabitur convallis duis consequat dui nec nisi volutpat eleifend"},
        {"id":196,"recipe_id":34,"name":"orci eget orci vehicula condimentum curabitur in"},
        {"id":197,"recipe_id":57,"name":"proin leo odio porttitor id"},
        {"id":198,"recipe_id":17,"name":"id mauris vulputate elementum nullam varius nulla"},
        {"id":199,"recipe_id":55,"name":"nulla ac enim in tempor turpis nec euismod scelerisque"},
        {"id":200,"recipe_id":23,"name":"sed sagittis nam congue risus semper porta volutpat quam"}]);
      });
  };
  
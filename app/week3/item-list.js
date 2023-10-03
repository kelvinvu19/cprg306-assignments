import Item from "./item"; 

export default function ItemList() { 
    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
      };
       
      const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
      };
       
      const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
      };
       
      const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
      };
       
      const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
      };
       
      const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
      };
       
      const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
      };
       
      const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
      };
       
      const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
      };
       
      const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
      };
       
      const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
      };
       
      const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
      };

      return (
        <>
          <Item
            name={event1.name}
            quantity={event1.quantity}
            category={event1.category}
          />
          <Item
            name={event2.name}
            quantity={event2.quantity}
            category={event2.category}
          />
          <Item
            name={event3.name}
            quantity={event3.quantity}
            category={event3.category}
          />
          <Item
            name={event4.name}
            quantity={event4.quantity}
            category={event4.category}
          />
          <Item
            name={event5.name}
            quantity={event5.quantity}
            category={event5.category}
          />
                    <Item
            name={event6.name}
            quantity={event6.quantity}
            category={event6.category}
          />
          <Item
            name={event7.name}
            quantity={event7.quantity}
            category={event7.category}
          />
          <Item
            name={event8.name}
            quantity={event8.quantity}
            category={event8.category}
          />
          <Item
            name={event9.name}
            quantity={event9.quantity}
            category={event9.category}
          />
          <Item
            name={event10.name}
            quantity={event10.quantity}
            category={event10.category}
          />
            <Item
            name={event11.name}
            quantity={event11.quantity}
            category={event11.category}
          />
            <Item
            name={event12.name}
            quantity={event12.quantity}
            category={event12.category}
          />
        </>
      );
}
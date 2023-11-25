import { useState } from "react";


export default function Flutterwave() {
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  //const [loading, setLoading] = useState(false);

  const config = {
    customer: {
      amount: amount,
      name: name,
      email: email,
      phone_number: phone,
    }
  }

  const handleClick = async () => {
    try {
      const res = await fetch('/api/flutter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handSubmit = (e) => {
    e.preventDefault()
  }
  
  return ( 
    <div className="p-3 max-w-lg mx-auto">
      <div className="flex flex-col gap-4">
      <form onSubmit={handSubmit}>
        <input
          className="border p-3 rounded-lg"
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={handleClick}
        >
          PAY
           {/* {loading ? "loading..." : "Proceed to Payment"} */}
        </button>
      </form>
      </div>
    </div>
  );
}

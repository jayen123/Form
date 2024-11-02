export default function SimpleForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(e.target.name.value);
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

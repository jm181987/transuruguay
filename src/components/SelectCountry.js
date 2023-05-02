
const SelectCountry = ({ arialabel, name, onChange, required }) => {
  const kraje = ["Afghanistan",

    "Argentina",
    "Brasil",
    "Chile",
    "Paraguay",
    "Peru",
    "Uruguay",

  ]
  let i = 0;
  return (
    <div className="form mb-4">
      <select id="country" name={name} className="form-select"
        aria-label={arialabel} onChange={onChange} required={required}>
        <option value="none">----</option>
        {kraje.map((kraj) => <option key={i++} value={kraj}>{kraj}</option>
        )}
      </select>
    </div>
  )
}

export default SelectCountry
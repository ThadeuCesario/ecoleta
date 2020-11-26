import React, {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import {MapContainer, TileLayer, Marker, useMapEvents} from 'react-leaflet';
import axios from 'axios';
import api from '../../services/api';
import {LeafletMouseEvent} from 'leaflet';

// Array ou objeto: manualmente informar o tipo da variável.

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const history = useHistory();

  useEffect(() => {
    api.get('items').then(response => {
      return setItems(response?.data);
    })
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function MapContainerEvent() {
    const map = useMapEvents({
      click: (event: LeafletMouseEvent) => {
        console.log(event.latlng);
        setSelectedPosition([
          event.latlng.lat,
          event.latlng.lng
        ]);
      }
    });
    return null;
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target;
    console.log(event);
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);
      setSelectedItems([...filteredItems]);
    }
    else{
      setSelectedItems([...selectedItems, id]);
    }
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const {name, email, whatsapp} = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const item = selectedItems;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    }

    api.post('points', data);

    alert('Ponto de coleta criado!');

    history.push('/');
  }


  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);
        setUfs(ufInitials);
      })
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  

  return(
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Logo Ecoleta"/>
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      <form onSubmit={handleSubmit}>
        <h1>Cadastro do <br/> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">
              Nome da entidade
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
          <div className="field">
            <label htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="whatsapp">
              Whatsapp
            </label>
            <input
              type="text"
              name="whatsapp"
              id="whatsapp"
              onChange={handleInputChange}
            />
          </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={false} >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapContainerEvent />
            <Marker position={selectedPosition} />
          </MapContainer>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf" onChange={handleSelectUf} value={selectedUf}>
                <option value="0">Selecione uma UF</option>
                {ufs.map(uf => {
                  return (
                  <option key={uf} value={uf}>{uf}</option>
                  )
                })}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city" onChange={handleSelectCity} value={selectedCity}>
                <option value="0">Selecione uma cidade</option>
                {cities.map(city => {
                  return (
                  <option key={city} value={city}>{city}</option>
                  )
                })}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
          </legend>
          <ul className="items-grid">
            {items.map(item => {
              const {id, title, image_url} = item;
              return (
                <li key={id} onClick={() => handleSelectedItem(id)} className={selectedItems.includes(id) ? 'selected' : ''}>
                  <img src={image_url} alt={title}/>
                  <span>{title}</span>
                </li>
              )
            })}
          </ul>
        </fieldset>
        <button type="submit">
          Cadastrar ponto de coleta
        </button>
      </form>
    </div>
  )
}

export default CreatePoint;
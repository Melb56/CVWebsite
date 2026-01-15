import '../styles/mentions.css';

const MentionsL = () => {
  return (
    <div id='mentions' className='mentions'>
        <h2>Mentions Légales</h2>

        <div>
            <h3>Éditeur du site</h3>
            <p>
                Nom : <strong>Mélanie Bruzac</strong> <br />
                Statut : <strong>Particulier</strong> <br />
                Objet du site : <strong>Portfolio</strong> <br />
                Contact : <strong>via le formulaire de contact du site</strong> <br /> 
            </p>
        </div>
       
        <div>
            <h3>Hébergement</h3>
            <p>
                Hébergeur : Vercel Inc. <br />
                Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis <br />
                Site web : vercel.com <br />            
            </p>            
        </div>

        <div>
            <h3>Propriété intellectuelle</h3>
            <p>
                L’ensemble du contenu présent sur ce site (textes, images, graphismes, logo, icônes, code, etc.) est la propriété exclusive de <strong>Mélanie Bruzac</strong>, sauf mention contraire. <br />
                Toute reproduction, représentation, modification ou adaptation, totale ou partielle, du contenu du site, par quelque procédé que ce soit, sans autorisation préalable écrite, est interdite.
            </p>
        </div>

        <div>
            <h3>Données personnelles & formulaire de contact</h3>
            <p>
                Les informations recueillies via le formulaire de contact (nom, adresse e-mail, message) sont utilisées <strong>uniquement pour répondre aux demandes</strong> et ne sont en aucun cas cédées à des tiers. <br />
                Conformément au <strong>Règlement Général sur la Protection des Données (RGPD)</strong> et à la loi « Informatique et Libertés », vous disposez des droits suivants concernant vos données personnelles :
                <ul>
                    <li>droit d’accès</li>
                    <li>droit de rectification</li>
                    <li>droit de suppression</li>
                </ul>
                Pour exercer ces droits, vous pouvez effectuer une demande via le formulaire de contact. <br />
                Les données sont conservées uniquement le temps nécessaire au traitement des demandes.
            </p>           
        </div>

        <div>
            <h3>Cookies</h3>
            <p>Ce site n’utilise pas de cookies de suivi ou de mesure d’audience.</p>
        </div>

        <div>
            <h3>Responsabilité</h3>
            <p>L’éditeur du site s’efforce de fournir des informations exactes et à jour. Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou d’une indisponibilité temporaire du site.</p>                 
        </div>
       


    </div>


  )
}

export default MentionsL
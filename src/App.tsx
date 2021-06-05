import React from 'react';
import './App.css';

function Role({ name, color }: { name: string, color: string }) {
  return <div className="role" style={{
    border: 'solid 1px ' + color,
  }}>
    <div className="role-dot" style={{backgroundColor: color}}></div>
    <span className="role-name">{name}</span>
  </div>
}

function Badge({ icon, style, link }: { icon: string, style?: any, link: string }) {
  return <img src={icon} alt="" onClick={() => window.location.href = link} className="badge" style={Object.assign({ cursor: "pointer" }, style ?? {})} />
}

function App() {
  return (
    <div id="app">
      <div id="profile">
        <div id="banner">
          <img id="avatar" src="https://cdn.discordapp.com/avatars/422957901716652033/a_fa5974bd259431d70cd208d45513d195.png" alt="" />
        </div>
        <div id="profile-content">
          <div id="badges">
            <Badge link="https://github.com/DjDeveloperr" icon="https://cdn.discordapp.com/avatars/807935467689213973/96f71ef36f69ece5ce3f2ace9ca28914.png" style={{ borderRadius: '50%' }} />
            <Badge link="https://ko-fi.com/DjDeveloper"  icon="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5ca5bf1dff3c03fbf7cc9b3c_Kofi_logo_RGB_rounded.png" style={{ borderRadius: "50%" }} />
            {/* <Badge link="https://discord.com/users/422957901716652033" icon="https://discord.com/assets/9f6f9cd156ce35e2d94c0e62e3eff462.png" style={{ width: '26px' }} /> */}
          </div>

          <div id="tag" style={{
            cursor: "pointer",
          }} onClick={() => window.location.href = "https://discord.com/users/422957901716652033"}>
            <span id="username">DjDeveloper</span>
            <span id="discriminator">#7777</span>
          </div>

          <div id="about-me-header">About Me</div>
          <div id="about-me">
            Hello! I'm Dj, a hobby programmer. I like to code Discord bots and API backends, sometimes websites too!
          </div>

          <div id="roles-cont">
            <div id="roles-header">Languages</div>
            <div id="roles">
              <Role name="JavaScript" color="#EFD81D" />
              <Role name="TypeScript" color="#2F74C0" />
              <Role name="Rust" color="#EF4A00" />
              <Role name="C#" color="#903BA7" />
              <Role name="Python" color="#326994" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

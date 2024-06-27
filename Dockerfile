FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Mrunknown54/EVIL-MD.git /root/Evilmd

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Evilmd/node_modules

# Install dependencies
WORKDIR /root/Evilmd
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/Evilmd/node_modules

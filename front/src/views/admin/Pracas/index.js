import React from "react";

// components
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import SimpleModal from "components/SimpleModal/SimpleModal.js"


export default function Dashboard() {

  return (
    <div>
      <Card>
        <CardBody>
          <Danger>Ola!!!!!</Danger>
        </CardBody>
      </Card>

      <SimpleModal/>

    </div>
  );
}
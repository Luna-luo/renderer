import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import React, { FunctionComponent } from "react";
import { DocumentQrCode } from "../../core/DocumentQrCode";
import { Wrapper } from "../../core/Wrapper";
import { BillOfLading } from "./types";

const smallText = (text: string): JSX.Element => <div style={{ fontSize: "0.8em" }}>{text}</div>;

const Section3 = (document: BillOfLading): JSX.Element => {
  const { bl_freight_and_charges, bl_freight_collect_or_prepaid,bl_signer,  bl_issue_place, bl_issue_date, bl_on_board_date} = document.documents[0]
  const carrierName = document.carrierName;
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2 h-24">{smallText("Freight & Charges")}</div>
          { bl_freight_and_charges }
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Rule")}</div>
          {bl_freight_collect_or_prepaid}
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Unit")}</div>
        </div>
        <div className="flex-grow border-black border">
          <div className="p-2 h-24">{smallText("Currency")}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Prepaid")}</div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2 h-24">{smallText("Collect")}</div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2">
          <div className="flex flex-col h-full">
            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText(
                    "Carrier's Receipt (see clause 1 and 14). Total number of containers or packages received by Carrier."
                  )}
                  <div>1 container</div>
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Place of Issue of B/L")}</div>
              </div>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">
                  {smallText("Number & Sequence of Original B(s)/L")}
                  THREE/3
                </div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Date of Issue of B/L")}</div>
                {bl_issue_date}
              </div>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Declared Value (see clause 7.3)")}</div>
              </div>
              <div className="w-1/2 border-black border">
                <div className="p-2">{smallText("Shipped on Board Date (Local Time)")}</div>
                {bl_on_board_date}
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 border-black border">
          <div className="p-2">
            {smallText(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur purus ut faucibus. Diam quam nulla porttitor massa. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Amet mauris commodo quis imperdiet massa tincidunt. Luctus accumsan tortor posuere ac ut. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Eros donec ac odio tempor orci dapibus. Varius morbi enim nunc faucibus a pellentesque sit amet. Velit aliquet sagittis id consectetur purus ut. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Odio ut sem nulla pharetra diam sit. Nunc sed augue lacus viverra vitae congue eu consequat ac. Eros in cursus turpis massa tincidunt dui ut ornare lectus."
            )}
            <div className="text-center mt-4 mb-16">
              <strong>{smallText(`Signed for the Carrier ${bl_signer || ""}`)}</strong>
            </div>
            <hr />
            <div className="text-center mt-2">
              <strong>{smallText("As Agent(s) for the Carrier")}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section2 = (document: BillOfLading): JSX.Element => {
  const packages = document.packages || [];
  const renderedKindOfPackage = packages.map((pkg, index) => <div key={index}>{pkg.description}</div>);
  const renderedWeight = packages.map((pkg, index) => <div key={index}>{pkg.weight}</div>);
  const renderedMeasurement = packages.map((pkg, index) => <div key={index}>{pkg.measurement}</div>);
  const { bl_total_nw, bl_measurement } = document.documents[0];

  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-3/5 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>
              Kind of Packages: Description of goods, Marks and Numbers: Container No./Serial No.
            </div>
            {renderedKindOfPackage}
            <div style={{ fontSize: "0.8em" }} className="mt-2">
              Above particulars as declared by Shipper, but without responsibility of our representation by Carrier (see
              clause 14)
            </div>
          </div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Weight</div>
            {bl_total_nw}
          </div>
        </div>
        <div className="w-1/5 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Measurement</div>
            {bl_measurement}
          </div>
        </div>
      </div>
    </div>
  );
};

const Section1 = (document: BillOfLading): JSX.Element => {
  const { scac } = document;
  const {bl_lc_id, bl_id, bl_shipper,bl_shipper_address, bl_shipper_contacts, bl_consignee,bl_notify_party,bl_vessel,bl_voyage_number,bl_port_of_loading,bl_port_of_discharge} = document.documents[0]
  return (
    <div className="border-black border">
      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2 h-full flex justify-center items-center">
            {/*<img data-testid="logo" style={{ width: "96px" }} src="/static/images/logo.svg" />*/}
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex">
            <div className="w-2/3 border-black border">
              <div className="p-2">
                <strong>BILL OF LADING FOR OCEAN TRANSPORT OR MULTIMODAL TRANSPORT</strong>
              </div>
            </div>
            <div className="w-1/3 border-black border">
              <div className="p-2 border-black border-b-2">
                SCAC <strong>{scac}</strong>
              </div>
              <div className="p-2">
                B/L No <strong className="break-all">{bl_lc_id}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Shipper</div>
            <div className="p-4">
              <div>{bl_shipper || ""}</div>
              <div>{bl_shipper_address || ""}</div>
              <div>{bl_shipper_contacts || ""}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2 border-black border-b-2">
            <div style={{ fontSize: "0.8em" }}>Booking No</div>
            <div>{bl_id}</div>
          </div>
          <div className="p-2 border-black border-b-2">
            <div style={{ fontSize: "0.8em" }}>Export references</div>
          </div>
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>
              Onward inland routing (Not part of Carriage as defined in clasuse 1. For account and risk of Merchant)
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>
              Consignee (negotiable is consiged &quot;to order&quot;, &quot;to order of&quot; a named Person or &quot;to
              order of bearer&quot;)
            </div>
            <div className="p-4">
              <div>TO THE ORDER OF</div>
              <div>{bl_consignee || ""}</div>
            </div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Notify Party (see clause 22)</div>
            <div className="p-4">
              <div>{bl_notify_party || ""}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Vessel (see clause 1 + 19)</div>
            <div className="break-words">{bl_vessel || ""}</div>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Voyage No.</div>
            <div className="break-all">{bl_voyage_number || ""}</div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2" style={{ fontSize: "0.8em" }}>
            Place of Receipt. Applicable only when document used as Multimodal Transport B/L (see clause 1)
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Port of Loading</div>
            <div className="break-words">{bl_port_of_loading || ""}</div>
          </div>
        </div>
        <div className="w-1/4 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>Port of Discharge</div>
            <div className="break-words">{bl_port_of_discharge || ""}</div>
          </div>
        </div>
        <div className="w-1/2 border-black border">
          <div className="p-2">
            <div style={{ fontSize: "0.8em" }}>
              Place of Delivery. Applicable only when document used as Multimodal Transport B/L (see clause 1)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillOfLadingTemplate: FunctionComponent<TemplateProps<BillOfLading>> = ({ document }) => {
  const qrCodeUrl = document?.links?.self.href;
  return (
    <Wrapper data-testid="bill-of-lading-template">
      <div className="mb-8">{Section1(document)}</div>
      <div className="text-center">
        <strong>PARTICULARS FURNISHED BY SHIPPER</strong>
      </div>
      <div className="mb-8">{Section2(document)}</div>
      {Section3(document)}
      {qrCodeUrl && <DocumentQrCode url={qrCodeUrl} />}
    </Wrapper>
  );
};

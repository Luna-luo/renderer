import {v2} from '@govtechsg/open-attestation';
import {BillOfLading} from './types';

export const BillOfLadingSample: BillOfLading = {
  $template: {
    type: v2.TemplateType.EmbeddedRenderer,
    name: 'BILL_OF_LADING',
    url: 'http://localhost:3000',
  },
  issuers: [
    {
      name: 'abc',
      documentStore: '0x1245e5B64D785b25057f7438F715f4aA5D965733',
    },
  ],
  links: {
    self: {
      href: 'https://action.openattestation.com/?q=%7B%22type%22:%22DOCUMENT%22,%22payload%22:%20%7B%22uri%22:%20%22https://api-ropsten.tradetrust.io/storage/33737b71-96f6-4019-b6c1-5fcea04fcc2a%22,%22key%22:%20%22edcbadf17301fe5dfe174496c7edf29e0702e2775ee919bbccb74d0dfd5a1b4b%22,%22permittedActions%22:%20%5B%22STORE%22%5D,%22redirect%22:%20%22https://dev.tradetrust.io%22%7D%7D',
    },
  },
  scac: 'SGPU',
  blNumber: 'SGCNM21566325',
  packages: [
    {
      description: 'description',
      weight: '10',
      measurement: '20',
    },
  ],
  documents: [
    {
      'bl_doc_name': 'Ocean Bill of Lading',
      'bl_id': 'DHI025637468777',
      'bl_lc_id': 'YCCTST00178780377',
      'bl_issuer': 'DSV Ocean Transport A/S',
      'bl_consignee': 'Shenzhen Haoxu',
      'bl_consignee_address': '',
      'bl_consignee_contacts': '',
      'bl_freight_payer': 'Shenzhen Import Limited',
      'bl_notify_party': 'Shenzhen Import Limited',
      'bl_notify_party_address': '1 Beach Rd, Singapore 189673 SINGAPORE',
      'bl_also_notify_party': 'Singapore Trade Limited',
      'bl_also_notify_party_address': '1 Beach Rd, Singapore 189673 SINGAPORE',
      'bl_shipper': 'DEMO Seller',
      'bl_shipper_address': '39/F China Energy Building, Keyuan Road South, Nanshan, Shenzhen, Guangdong Province, China',
      'bl_shipper_contacts': '+86(0755)28850022',
      'bl_shipper_forwarding_agent': 'DSV Ocean Transport Shenzhen',
      'bl_consignee_forwarding_agent': '',
      'bl_place_of_receipt': 'Shenzhen, China',
      'bl_port_of_loading': 'Shenzhen, China',
      'bl_port_of_discharge': 'Port Jurong, Singapore',
      'bl_final_destination': 'Port Jurong, Singapore',
      'bl_place_of_delivery': 'Port Jurong, Singapore',
      'bl_shipment_terms': 'FCL',
      'bl_vessel': 'KIEL TRADER',
      'bl_voyage_number': '200X4GIL',
      'bl_marks_and_numbers': 'STY-COL:\nISD No:\nShenzhen, China\nQTY:\nPO#: HJ250365\nMade in Country of',
      'goods_list': [
        {
          'bl_list_goods_description': 'MEN\'s WOVEN DRESS SHIRTS\nCATEGORY NO: 550525\nHTS# 620520\nPO#: HJ250365',
          'bl_list_merchandise_name': 'MEN\'s WOVEN DRESS SHIRTS',
          'bl_list_hs_code': '620520',
          'bl_list_gw': '116',
          'bl_list_quantity': '800',
          'bl_list_quantity_unit': 'PCS',
          'bl_list_cbm': '1.423'
        }
      ],
      'bl_total_gw': '116',
      'bl_total_nw': '100',
      'bl_cbm': '1.423',
      'bl_measurement': '8X6X5',
      'bl_freight_payable_at': 'Singapore',
      'bl_freight_collect_or_prepaid': 'Collect',
      'bl_issue_place': 'Shenzhen, China',
      'bl_issue_date': '6/23/2021',
      'bl_original': '3',
      'bl_copies': '3',
      'bl_container_id': 'SUDU562520',
      'bl_precarried_by': '',
      'bl_shipped_on_board': 'T',
      'bl_on_board_date': '6/23/2021',
      'bl_signer': 'DSV Ocean Transport A/S',
      'bl_freight_and_charges': 'Freight Collect',
      'bl_agent_name': 'DSV Ocean Transport Shenzhen',
      'bl_carrier_name': 'DSV Ocean Transport A/S'
    }
  ],
  shipper: {
    name: 'Shipper Name',
    address: {
      street: '101 ORCHARD ROAD',
      country: 'SINGAPORE',
    },
  },
  vessel: 'vessel',
  voyageNo: 'voyageNo',
  consignee: {
    name: 'Consignee name',
  },
  notifyParty: {
    name: 'Notify Party Name',
  },
  portOfDischarge: 'Paris',
  portOfLoading: 'Singapore',
  carrierName: 'A.P. Moller',
};
